---
title: Lecture 20 Outline
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: lecture-20-outline
    weight: 520
---
| Disclaimer: This is part of the security section in 6.033. Only use the information you learn in this portion of the class to secure your own systems, not to attack others. 

1.  Introduction
    *   Previously in 6.033: Building reliable systems in the face of more-or-less random, more-or-less independent failures.
    *   Today: Building systems that uphold some goals in the face of targeted attacks from an adversary.
    *   What can an adversary do?
        *   Personal information stolen
        *   Phishing attacks
        *   Botnets
        *   Worms / viruses
        *   Etc.
2.  Computer Security vs. General Security
    *   Similarities:
        *   Compartmentalization (different keys for different things).
        *   Log information, audit to detect compromises.
        *   Use legal system for deterrence.
    *   Differences:
        *   Internet = fast, cheap, scalable attacks.
        *   Number and type of adversaries is huge.
        *   Adversaries are often anonymous.
        *   Adversaries have a lot of resources (botnets).
        *   Attacks can be automated.
        *   Users have poor intuition about computer security.
3.  Difficulties of Computer Security
    *   Aside from everything above...
    *   It's difficult to enumerate all threats facing computers.
    *   Achieving something despite whatever an adversary might do is a negative goal.
        *   Contrast: An example of a positive goal is "Katrina can read grades.txt". Can easily check to see if the goal is met.
        *   Example of a negative goal: "Katrina cannot read grades.txt". Not enough to just ask Katrina if she can read grades.txt and have her respond "no."
            *   Hard to reason about all possible ways she could get access: Change permissions, read backup copy, intercept network packets...
    *   One failure due to an attack might be one too many (e.g., disclosing grades.txt even once).
    *   Failures due to an attack can be highly correlated; difficult to reason about failure probabilities.
    *   As a result: We have no complete solution. We'll learn how to model systems in the context of security and how to assess common risks/combat common attacks.
4.  Modeling Security
    *   Need two things:
        1.  Our goals, or our "policy."
            *   Common ones:
                *   Privacy: Limit who can read data.
                *   Integrity: Limit who can write data.
                *   Availability: Ensure that a service keeps operating.
        2.  Our assumptions, or our "threat model."
            *   What are we protecting against? Need plausible assumptions.
            *   Examples:
                *   Assume that the adversary controls some computers or networks but not all of them.
                *   Assume that then adversary controls some software on computers, but doesn't fully control those machines.
                *   Assume that the adversary knows some information, such as passwords or encryption keys, but not all of them.
    *   Many systems are compromised due to incomplete threat models or unrealistic threat models.
        *   E.g., assume the adversary is outside of the company network/firewall when they're not. Or don't assume that the adversary can do social engineering.
    *   Try not to be overambitious with our threat models; makes modularity hard.
    *   Instead: Be very precise, and then reason about assumptions and solutions. Easier to evolve threat model over time.
5.  Guard Model
    *   Back to client/server model.
    *   Usually, client is making a request to access some resource on the server. So we're worried about security at the server.
    
                     Server
    
    Client ----> \[ resource \]
    
    *   To attempt to secure this resource, server needs to check all accesses to the resource. "Complete mediation."
    *   Server will put a "guard" in place to mediate every request for this particular resource. Only way to access the resource is to use the guard.
    
                  Server
    
    Client ----> \[ guard | resource \]
    
    *   Guard often provides:
        *   Authentication: Verify the identify of the principal. E.g., checking the client's username and password..
        *   Authorization: Verify whether the principal has access to perform its request on the resource. E.g., by consulting an access control list for a resource.
    *   Guard model applies lots of places, not just client/server.
    *   Uses a few assumptions:
        *   Adversary should not be able to access the server's resources directly.
        *   Server properly invokes the guard in all the right places.
        *   (We'll talk about what happens if these are violated later.)
    *   Guard model makes it easier to reason about security.
    *   Examples:
        1.  UNIX file system
            *   Client: A process.
            *   Server: OS kernel.
            *   Resource: Files, directories.
            *   Client's requests: Read(), write() system calls.
            *   Mediation: U/K bit and the system call implementation.
            *   Principal: User ID.
            *   Authentication: Kernel keeps track of a user ID for each process.
            *   Authorization: Permission bits & owner UID in each file's inode.
        2.  Web server running on UNIX
            *   Client: HTTP-speaking computer.
            *   Server: Web application (let's say it's written in python).
            *   Resource: Wiki pages (say).
            *   Requests: Read/write wiki pages.
            *   Mediation: Server stores data on local disk, accepts only HTTP requests (this requires setting file permissions, etc., and assumes the OS kernel provides complete mediation).
            *   Principal: Username.
            *   Authentication: Password.
            *   Authorization: List of usernames that can read/write each wiki page.
        3.  Firewall. (A firewall is a system that acts as a barrier between a, presumably secure, internal network and the outside world. It keeps untrusted computers from accessing the network.)
            *   Client: Any computer sending packets.
            *   Server: The entire internal network.
            *   Resource: Internal servers.
            *   Requests: Packets.
            *   Mediation:
                *   Internal network must not be connected to internet in other ways.
                *   No open wifi access points on internal network for adversary to use.
                *   No internal computers that might be under control of adversary.
            *   Principal, authentication: None.
            *   Authorization: Check for IP address & port in table of allowed connections.
6.  What Can Go Wrong?
    1.  Complete mediation is bypassed by software bugs.
    2.  Complete mediation is bypassed by an adversary.
        *   How do we prevent these things? Reduce complexity: Reduce the number of components that must invoke the guard.
        *   In security terminology, this is the "principle of least privilege". Privileged components are "trusted". We limit the number of trusted components in our systems, because if one breaks, it's bad.
    3.  Policy vs. mechanism. High-level policy is (ideally) concise and clear. Security mechanisms (e.g., guards) often provide lower-level guarantees.
    4.  Interactions between layers, components. Consider this code:  
        `> cd /mit/bob/project  
        > cat ideas.txt  
        Hello world.  
        ...  
        > mail alice@mit.edu < ideas.txt`  
        Seems fine. But suppose in between us cat'ing ideas.txt and mailing Alice, Bob changes ideas.txt to a symlink to grades.txt.
    5.  Users make mistakes.
    6.  Cost of security. Users may be unwilling to pay cost (e.g., inconvenience) of security measures. Cost of security mechanism should be commensurate with value.