---
title: Lecture 16 Outline
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: c46fe11ed02304f575354315faa42e52_lecture-16-outline
    weight: 130
---
1.  Introduction
    *   Currently: Building reliable systems out of unreliable components. We're working on implementing transactions which provide:
        *   Atomicity
        *   Isolation
    *   So far: Have a poorly-performing version of atomicity via shadow copies.
    *   Today: Logging, which will give us reasonable performance for atomicity. Logging also works when we have multiple concurrent transactions, even though for today we're not thinking about concurrency.
2.  Motivating Example
    *   | begin | // T1 |
        | A = 100 |   |
        | B = 50 |   |
        | commit | // At commit: A=100; B=50 |{{< br >}}{{< br >}}| begin | // T2 |
        | A = A - 20 |   |
        | B = B + 20 |   |
        | commit | // At commit: A=80; B=70 |{{< br >}}{{< br >}}| begin | // T3 |
        | A = A + 30 |   |
        | —CRASH— |   
    *   Problem: A = 110, but T3 didn't commit. We need to revert.
3.  Basic Idea
    *   Keep a log of all changes and whether a transaction commits or aborts.
        *   Every transaction gets a unique ID.
        *   UPDATE records include old an new values of a variable.
        *   COMMIT records specify that transaction committed..
        *   ABORT records specify that transaction aborted.
            *   Not always needed.
    *   (See [Lecture 16 slides (PDF)](https://open-learning-course-data.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/76fa2168e5a4c4722c315a84b8e09a8c_MIT6_033S18lec16.pdf) for the log for this example.)
    *   Nice: Updates are small appends.
4.  How to Use a Log for Transactions
    *   On begin: Allocate new transaction ID (TID).
    *   On write: Append entry to log.
    *   On read: Scan log to find last committed value.
    *   On commit: Write commit record.
        *   This is the commit point.
        *   Atomic because we can assume it's a single-sector write.
        *   Another way to do it would be to put checksums on each record and ignore partially-written records.
    *   On abort: Nothing (could write an ABORT record but not strictly needed).
    *   On recover: Nothing.
    *   (see [Lecture 16 slides (PDF)](https://open-learning-course-data.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/76fa2168e5a4c4722c315a84b8e09a8c_MIT6_033S18lec16.pdf) for code.)
5.  Performance of Log
    *   Writes: Good. Sequential = fast.
    *   Reads: Terrible. Must scan entire log.
    *   Recovery: Instantaneous.
6.  Cell Storage
    *   Improve read performance with cell storage.
        *   (For us) stored on disk, i.e., non-volatile storage.
        *   Updates go to log and cell storage.
        *   Read from cell storage.
    *   "Log" = write to log. "Install" = write to cell storage.
    *   How to recover:
        *   Scan the log backwards, determine what actions aborted, and undo them.
        *   (see [Lecture 16 slides (PDF)](https://open-learning-course-data.s3.amazonaws.com/6-033-computer-system-engineering-spring-2018/76fa2168e5a4c4722c315a84b8e09a8c_MIT6_033S18lec16.pdf) for code.)
        *   What if we crash during recovery? No worries; recover() is idempotent. Can do it repeatedly.
    *   How to write:
        *   Log before install, not the other way; otherwise, can't recover from a crash in between the two writes.
        *   This is write-ahead logging.
7.  Performance of Log + Cell Storage
    *   Writes: Okay, but now we write to disk twice instead of once.
    *   Reads: Fast.
    *   Recovery: Bad. Have to scan the entire log.
8.  Improving Performance
    *   Improve writes: Use a (volatile) cache.
        *   Reads go to cache first, writes go to cache and are eventually flushed to cell storage.
        *   Problem: After crash, there may be updates that didn't make it to cell storage (were in cache but not flushed).
            *   Also could be updates in cell storage that need to be undone, but we had that problem before.
        *   Solution: We need a redo phase in addition to an undo phase in our recovery.
    *   Improving recovery:
        *   Problem: Recovery takes longer and longer as the log grows.
        *   Solution: Truncate the log.
        *   How?
            *   Assuming no pending actions:
                *   Flush all cached updates to cell storage.
                *   Write a CHECKPOINT record.
                *   Truncate the log prior to the CHECKPOINT record.
                    *   Usually amounts to deleting a file.
            *   With pending actions, delete before the checkpoint and earliest undecided record.
    *   ABORT records
        *   Can be used to help recovery and skip undo-ing aborted transaction. Not necessary for correctness—can always just pretend we crashed—but can help.
9.  What about Un-undo-able Actions?
    *   What if our transaction fires a missile and then aborts?
    *   Typically: Wait for software that controls the action to commit and then take the action, but have a special way to detect whether the action has/will happened.
10.  Summary
    *   Logging is a general technique for achieving atomicity.
        *   Writes are fast, reads can be fast with cell storage.
        *   Need to log before installing (write-ahead), and need a recovery process.
    *   Tomorrow is recitation: Logging for file systems.
    *   Now: We're good with atomicity.
        *   In fact, logging will work fine with concurrent transactions; the problem will be figuring out which steps we can actually run in parallel.
    *   Wednesday: Isolation.
    *   Next week: Distributed transactions.