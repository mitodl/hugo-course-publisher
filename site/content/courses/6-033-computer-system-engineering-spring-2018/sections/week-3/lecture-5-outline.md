---
title: Lecture 5 Outline
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 05b631a6ef1c2f86b87712c4e1b89310
    type: section
    layout: section
    name: Lecture 5 Outline
    weight: 150
    parent: 81056cb9554591390582b2e55570d21a
---
Students: This lecture involved looking at the details of a lot of code. Please see the slides for those implementations: `yield(), wait(), yield_wait().`

1.  Introduction
    *   Today: get rid of assumption that we only have one program per CPU.
    *   Sharing CPU is a problem because one program can block another.
2.  Threads
    *   thread = virtual processor
    *   API: suspend(), resume()
    *   Need to capture program's state: value of all registers, all of its memory.
    *   Big question: when to suspend/resume a thread?
3.  yield()
    *   Command to tell kernel that thread is waiting for an event.
    *   Implementation does three things: Suspends running thread, chooses new thread to run, resumes new thread.
        *   Data structures: Threads table, CPUs table, t\_lock.
        *   Suspending current thread: Save stack pointer and page-table register.
        *   Choosing a new thread: Round-robin fashion until we hit a RUNNABLE thread (perhaps the one that just called yield).
        *   Resuming new thread: Reload state.
    *   All of this happens as an atomic action.
4.  Condition Variables
    *   Allow kernel to notify threads instead of having threads constantly make checks.
    *   "Lost notify" problem:
        *   T1 has lock on buffer, finds it full, releases lock.
        *   Prior to T1 calling wait, T2 acquires lock, reads message, notifies waiting threads that the buffer is not full.
        *   ..but T1 is not yet waiting; it was interrupted before it could call wait.
    *   Solution: API is wait(cv, lock), not wait(cv)..
        *   when a thread calls wait, it goes to sleep and releases the lock.
    *   Wait implementation:
        *   requires a different version of yield() — yield\_wait() — to prevent deadlock.
        *   yield\_wait() releases and re-acquires t\_lock in the middle, and must point to a special stack to prevent stack corruption.
5.  Preemption
    *   If a thread never calls yield or wait, it's okay; special hardware will periodically generate an interrupt and forcibly call yield.
    *   ..But what if this interrupt occurs while the CPU is running yield()? Deadlock.
    *   Solution: Hardware mechanism to disable interrupts.
6.  Reflection/Summary
    *   We've enforced modularity on a single machine, assuming that the OS itself is indeed correct.
    *   Locks and threads are interesting: we needed them to get bounded buffers to work, but they bring up modularity issues. We had to reason globally about locks.
    *   To truly enforce modularity, we needed kernel and/or hardware support.