---
title: 'Terminating a Loop Prematurely: Break and Continue'
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 82a5f4af7795cec4224410e4df0f38ae
    weight: 230
    parent: 1d7068b5ce8d3b56622ae79682a1dd43
---
As you may recall, a `while` loop will evaluate all its statements without checking the condition. Similarly a `for` loop will run through all of its iterations. The `break` keyword tells MATLAB® to exit the loop immediately. It will only terminate one loop (in the case of nested loop, the innermost one it is in) and will normally be protected by an `if` statement (otherwise the loop is silly). Here is an example that computes the "trajectory" of 6 but stops if it finds a 17 in it:

    s=6;             % initialize s to 6
    while s~=1       % as long as s is not equal to 1 stay in the loop
         if s==17    % if s equals 17
              sprintf('Found 17 in the loop!!')
              break;
         end
         if mod(s,2) % the actual "brains" of the iteration
              s=s/2;
         else
              s=3*s+1;   

The keyword `continue` is similar but different. It avoids the rest of the statements of the inner most loop, but continues in the loop (does not stop like `break`).

Here's example code for a `while` loop that uses both break and continue to find the first 100 primes (not very efficiently, but it's only an example):

    n=1;
    m=0;
    
    while 1      % this means that unless we use "break", the loop will continue "forever"
         n=n+1;  % increase n
         flag=0; % reset flag
         for i=2:ceil(sqrt(n)) % no need to check numbers greater than the square-root of n
              if mod(n,i)==0   % means that i divides n exactly
                   flag = 1    % to know that we found a divisor
                   break;      % no need to remain in the for loop
              end
         end
         if flag
              continue % to avoid the next line. It could have also been done
                       % differently with an "if" statement, but this can be more elegant
         end
         sprintf('%d is prime!\n',n) % this is quite an interesting command...
                                     % take some time to learn about it
         m=m+1;      % increment primes count
         if m>=100   % if we have enough
              break; % stop looking for primes
         end
    end
    

**Homework 6.** _The keywords_ `break` _and_ `continue` _are not "needed''_ per se, _but they can make the code more elegant and readable. Rewrite the above code for the first 100 primes without using neither_ `continue` _nor_ `break`.

**Homework 7.** `for` _loops and_ `while` _loops are not inherently different:_

*   _The "input" of a_ `for` _loop is a variable and a vector of values. Recreate the functionality of a_ `for` _loop using a_ `while` _loop_.
*   _The "input" of a_ `while` _loop is the condition statement. Recreate the functionality of a_ `while` _loop using a for loop. (Hint: when using the notation_ `for i=1:n` _MATLAB does not_ actually _create the vector_ `1:n`. _Internally it simply iterates over the values in that vector by incrementing_ `i` _until it reaches_ `n`. _This means that if you write_ `for i=1:281474976710655` _you'll get a loop that, on its own, will "never" terminate. Explanation: 281474976710655 is the largest_ integer _that MATLAB can represent internally. It is such a large number that even if every pass through the loop only takes 1 millisecond getting through the loop will take about 10000 years.)_