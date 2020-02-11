---
title: Lecture 3 Outline
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 09361169bc522c622a188d7cf0c6d2ac_lecture-3-outline
    weight: 80
    parent: d23c09ff9de9dc9cb98905d72c54fd66_week-2
---
1.  Previously
    *   Modularity reduces complexity.
    *   Naming is necessary for modularity.
2.  Operating Systems
    *   Job: Enforce modularity on a single machine.
        *   Also: Multiplexing, isolation, cooperation, portability, performance, ...
    *   To enforce modularity on a single machine, need to:
        *   Protect programs' memory from each other.
        *   Allow programs to communicate.
        *   Allow programs to share a single CPU.
    *   Virtualization is how we do that.
    *   Today: Virtualize memory. Assume one CPU per program and that programs don't need to communicate.
3.  Virtual Memory
    *   Two components: Main memory, CPU.
    *   CPU holds instruction pointer (EIP).
    *   Naive method: Two programs can just point to each other's memory (bad).
    *   Another method: Force programs to only use particular blocks of memory by having them address only part of the space. Complicated.
    *   Virtual memory addressing: Let each program address the full 32-bit space. MMU translates virtual to physical addresses.
4.  Page Tables
    *   Idea 1: Store physical addresses, use virtual addresses as an index into that table.
    *   Problem: Table is too big.
    *   Solution: Virtual address = page number + offset. MMU maps virtual page numbers to physical page numbers. Keeps offset the same.
    *   Page table entries contain other stuff. Among that stuff:
        *   Present bit
            *   This bit lets us know if a page resides in RAM or storage. That's how the OS deals with not actually having 2^32\* (number of programs) physical addresses in RAM: Pages can live on disk when necessary.
        *   R/W bit
        *   U/S bit
        *   These bits let the OS know when to trigger page faults.
5.  Hierarchical Page Tables
    *   "Normal" page tables (described above) still use a lot of space.
    *   Page tables have to be allocated all at once or not at all.
    *   Hierarchical page tables solve this by creating a hierarchy of page tables and allocating each table only when it's needed.
        *   Virtual addresses get divided into multiple parts, one part per level in the hierarchy + an offset.
    *   Downside? Speed. Multiple lookups instead of one. More page faults.
6.  Kernel
    *   Virtualized memory doesn't protect the page table.
    *   Kernel mode vs. user mode does this.
    *   Switch between user and kernel modes via interrupts.
7.  Abstraction
    *   Some things can't be virtualized (disk, network, ...).
    *   OS abstractions (system calls) make these things portable.
    *   System calls are implemented as interrupts.
8.  Virtual Memory as Naming
    *   Virtual memory is just a naming scheme.
    *   Gives us hiding, controlled sharing, indirection.

Next lectures: Get rid of our initial assumptions (one CPU per program, etc.).