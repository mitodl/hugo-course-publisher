---
title: Lecture 15 Outline
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: f982d8412b343c22726204fc7b163732_lecture-15-outline
    weight: 400
    parent: 038398268d831a706fad0af0bfa301d7_week-8
---
1.  Introduction
    *   Main goal: Build a reliable system out of unreliable components.
    *   Last two days: Reliability via replication.GFS gave you replication to tolerate machine failures as long as you had some sweeping simplications.
    *   Replication lets us mask failures from users...
    *   ...But doesn't solve all of our problems. Can't replicate everything.
    *   For failures that replication can't handle: Need to reason about them and then deal with them. The reasoning is hard.
2.  Atomicity
    *   Starting today, we want to achieve "atomicity": Atomic actions happen entirely or not at all. (Sometimes this is called "all-or-nothing atomicity" instead of just atomicity.)
    *   Why atomicity?
        *   Will enable sweeping simplifications for reasoning about fault-tolerance. Either the action happened or it didn't; we don't have to reason about an in-between state.
        *   Will be realistic for applications.
    *   Motivating example:
    
        `// transfer amount from account_a to account_b  
      transfer(bank, account_a, account_b, amount):  
        bank[account_a] = bank[account_a] - amount  
        bank[account_b] = bank[account_b] + amount`
    
    Crash between the two lines is bad: Deducted amount from a, but didn't add it to b.
    
    *   What should have happened? We exposed internal state; instead, all of this should have happened at once, or not at all -> it should have been atomic.
        *   Understanding that this code should be atomic comes from understanding what the application is \*doing\*. What actions need to be atomic depends on the application.
3.  Achieving Atomicity
    *   Attempt 1:
        *   Store a spreadsheet of account balances in a single file.
        *   Load the file into memory, make updates, write back to disk when done.
        *   (See [Lecture 15 slides (PDF)](https://open-learning-course-data-ci.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/df1526408e3ec6f7e43aadfa1ce5f944_MIT6_033S18lec15.pdf) for code).
    *   If system crashes in the middle? Okay—on reload, we'll read the file, will look as if transfer never happened.
    *   If we crash halfway through writing file? Can't handle that.
    *   Golden rule: Never modify the only copy.
4.  Achieving Atomicity with Shadow Copies
    *   New idea: Write to a "shadow copy" of the file first, then rename the file in one step.
        *   (See [Lecture 15 slides (PDF)](https://open-learning-course-data-ci.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/df1526408e3ec6f7e43aadfa1ce5f944_MIT6_033S18lec15.pdf) for code.)
    *   If we crash halfway through writing the shadow copy? Still have intact old copy.
    *   This makes rename a "commit point."
        *   Crash before a commit point => old values.
        *   Crash after a commit point => new values.
        *   Commit point itself must be atomic action.
    *   But then rename itself must be atomic.
        *   Why didn't we try to make write\_accounts an atomic action in the first attempt? Because it would be very hard to do; you'll see after we make rename atomic why this was the right choice.
5.  Making Rename Atomic
    *   Shadow copies are good. How do we make rename atomic?
    *   What must rename() do?
        1.  Point "bank\_file" at "tmp\_bankfile"'s inode.
        2.  Remove "tmp\_bankfile" directory entry.
        3.  Remove refcount on the original file's inode.
    *   (See [Lecture 15 slides (PDF)](https://open-learning-course-data-ci.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/df1526408e3ec6f7e43aadfa1ce5f944_MIT6_033S18lec15.pdf) slides for code.)
    *   Is this atomic?
        *   Crash before setting dirent => rename didn't happen.
        *   Crash after setting dirent => rename happened, but refcounts are wrong.
        *   Crash while setting dirent => very bad; system is in an inconsistent state.
    *   So two problems:
        1.  Need to fix refcounts.
        2.  Need to deal with a crash while setting the dirent.
6.  Single-Sector Writes
    *   Deal with the second problem by preventing it from happening: Setting the dirent involves a single-sector write, which the disk provides as an atomic action.
        *   The time spent writing a sector is small (remember: high sequential speed).
        *   A small capacitor suffices to power the disk for a few microseconds (this capacitor is there to "finish" the right even on power failure). 
        *   If the write didn't start, there's no need to complete it; the action will still be atomic.
7.  Recovering the Disk
    *   Other combinations of incrementing and decrementing refcounts won't work. Mostly because, even if we increment before every applicable action, and decrement after the actions, we could crash between the actions and the increments/decrements.
    *   Solution: Recover the disk after a crash.
        *   Clean up refcounts.
        *   Delete tmp files.
        *   (See Lecture 15 slides (PDF) for code.)
    *   What if we crash during recover? Then just run recover again after that crash.
8.  Shadow Copies: A Summary
    *   Shadow copies work because they perform updates/changes on a copy and automatically install a new copy using an atomic operation (in this case, single-sector writes)
    *   But they don't perform well
        *   Hard to generalize to multiple files/directories
        *   Require copying the entire file for even small changes
        *   Haven't even dealt with concurrency
9.  Transactions
    *   Speaking of concurrency: We're going to want another thing.
    *   Isolation
        *   Run A and B concurrently, and it appears as if A ran before B or vice versa.
    *   Transactions: Powerful abstraction that provides atomicity \*and\* isolation.
        *   We've been trying to figure out how to provide atomicity. Our larger goal is to provide both abstractions, so that we can get transactions to actually work.
    *   Examples:
    | `T1` |     | `T2` |
    | `begin` |     | `begin` |
    | `transfer(A, B, 20)` |     | `transfer(B, C, 5)` |
    | `withdraw(B, 10)` |     | `deposit(A, 5)` |
    | `end` |     | `end` 
    
    *   "begin" and "end" define start and end of transaction
    *   These transactions are using higher-level steps than before. T1, e.g., wants the transfer \*and\* the withdraw to be a single atomic action.
    
10.  Isolation
    *   Isn't isolation obvious? Can't we just put locks everywhere?
        *   (See [Lecture 15 slides (PDF)](https://open-learning-course-data-ci.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/df1526408e3ec6f7e43aadfa1ce5f944_MIT6_033S18lec15.pdf) for code)
    *   Not exactly:
        *   This solution may be correct, but will perform poorly. Very poorly for the scale of systems that we're dealing with now.
            *   We don't \*really\* want only one thread to be in the transfer() code at once.
        *   Locks inside transfer() won't provide isolation for T1 and T2; those would need higher-level locks.
        *   Locks are hard to get right: require global reasoning.
    *   So we don't know how to provide isolation yet. But we'll get there eventually. We will \*use\* locks, just in a much more systematic way that you've seen until now, and in a way that performs well.
11.  The Future
    *   What we're really trying to do is implement transactions. Right now we have a not-very-good way to provide atomicity, and no way to provide isolation. (unless you count a single, global lock).
    *   Next week: We're going to get atomicity and isolation working well on a single machine.
    *   Week after: We're going to get transaction-based systems to run across multiple machines.