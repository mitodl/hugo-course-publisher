---
title: 1.11  Infinite Sets
course_id: 6-042j-mathematics-for-computer-science-spring-2015
menu:
  6-042j-mathematics-for-computer-science-spring-2015:
    identifier: 2a872ada73264e5e242479718dd2615f_set-theory-axioms-optional-0
    weight: 290
---
*   [<Set Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)
*   [1.11.1Cardinality: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3)
*   [1.11.2Cantor, Schroeder-Bernstein](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-e7c2a3883170)
*   [1.11.3Countable Sets: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/countable-sets-video)
*   [1.11.4Cantor's Theorem: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-4eaa04fd577b)
*   [1.11.5Cantor's Diagonal Argument](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-733f8439bc8d)
*   [1.11.6Countable and Uncountable Sets](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-3077e4479731)
*   [1.11.7The Halting Problem: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-b654b1f1c6e1)
*   [1.11.8Halting Problem Basics \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-1ef05b471b3d)
*   [1.11.9Russell's Paradox: Video](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-f1f52e8d7024)
*   [1.11.10Russell's Paradox \[and ZFC optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-ac3ff158ffcb)
*   [1.11.11Set Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)
*   [1.11.12Set Theory Axioms \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-optional-0)
*   [\>Structures](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures)

Set Theory Axioms \[Optional\]
------------------------------

1.  Match the name of the set theory axiom to its corresponding statement. Try not to look back at the slides!
    
    1.  \\(\\forall x \\exists p\\forall s.s \\subseteq x\\) IFF \\(s \\in p\\)
        
        Exercise 1
        
        &nbsp;FoundationExtensionalityPower SetComprehension Power Set&nbsp;
        
    2.  If \\(S\\) is a set and \\(P(x)\\) is a predicate, then \\(\\{x \\in S \\mid P(x)\\}\\) is a set.
        
        Exercise 2
        
        &nbsp;FoundationExtensionalityPower SetComprehension Comprehension&nbsp;
        
    3.  \\(\\forall x.\[x \\neq \\emptyset\\) IMPLIES \\(\\exists y.y\\) is \\(\\in\\)-minimal in \\(x\\)\]
        
        Exercise 3
        
        &nbsp;FoundationExtensionalityPower SetComphrehension Foundation&nbsp;
        
    4.  \\(\\forall x \[x \\in y\\) IFF \\(x \\in z\]\\) IFF \\(\\forall x\[y \\in x\\) IFF \\(z \\in x\]\\)
        
        Exercise 4
        
        &nbsp;FoundationExtensionalityPower SetComprehension Extensionality&nbsp;
        
2.  Suppose the Foundation Axiom did not hold and there are sets \\(T, U, V\\) such that \\(T \\in U \\in V \\in T\\), and there are no other membership relations among them.  
    For each of the following sets, indicate whether it has an \\(\\in\\)-minimal element.
    1.  The empty set \\(\\emptyset\\)
        
        Exercise 5
        
        &nbsp;YesNoMaybe, but not necessarily No&nbsp;
        
        The empty set \\(\\emptyset\\) has no elements so it cannot have an \\(\\in\\)-minimal element.
        
    2.  \\(T\\)
        
        Exercise 6
        
        &nbsp;YesNoMaybe, but not necessarily Maybe, but not necessarily&nbsp;
        
        \\(T= \\{V\\}\\) is possible, and since \\(V \\notin V\\), the element \\(V\\) is \\(\\in\\)-minimal in \\(T\\) in this case. But if \\(T= \\{V,S\\}\\), where \\(V \\in S\\) and \\(S \\in V\\) for some set \\(S\\), then \\(T\\) has no \\(\\in\\)-minimal element.
        
    3.  \\(\\{T\\}\\)
        
        Exercise 7
        
        &nbsp;YesNoMaybe, but not necessarily Yes&nbsp;
        
        \\(T\\) is an \\(\\in\\)-minimal element of \\(\\{T\\}\\) because we know that \\(T \\notin T\\).
        
    4.  \\(\\{V, T\\}\\)
        
        Exercise 8
        
        &nbsp;YesNoMaybe, but not necessarily Yes&nbsp;
        
        \\(\\{V, T\\}\\) has the \\(\\in\\)-minimal element \\(V\\), since we know that \\(T \\notin V\\) and \\(V \\notin V\\).
        
    5.  \\(\\{U, V, T\\}\\)
        
        Exercise 9
        
        &nbsp;YesNoMaybe, but not necessarily No&nbsp;
        
        None of the elements in \\(\\{U, V, T\\}\\) is \\(\\in\\)-minimal because each has one of the others as a member.
        
    6.  \\(\\{T, U, V\\}\\)
        
        Exercise 10
        
        &nbsp;YesNoMaybe, but not necessarily No&nbsp;
        
        \\(\\{T, U, V\\} = \\{U, V, T\\}\\), so the answer is the same as above.
        
    7.  \\(\\{\\emptyset, T, U, V\\}\\)
        
        Exercise 11
        
        &nbsp;YesNoMaybe, but not necessarily Yes&nbsp;
        
        Yes, \\(\\{\\emptyset, T, U, V\\}\\) has the \\(\\in\\)-minimal element \\(\\emptyset\\).
        
        CheckShow Answer
        

*   [BackSet Theory Axioms: Video \[Optional\]](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional)
*   [ContinueStructures](/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures)