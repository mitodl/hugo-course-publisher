---
title: Binary Search Trees
course_id: 6-006-introduction-to-algorithms-fall-2011
menu:
  6-006-introduction-to-algorithms-fall-2011:
    identifier: 3e392c68f217c957d2c870f39c63c084
    weight: 60
    parent: aa632f8351fe4fa58aaf1513de806253
---
tt { font-size: 1.3em; } div.maintabletemplate table caption { color: #a33033; font-size: 1em; font-family: Verdana, Arial, Helvetica, sans-serif; } div pre { margin: 10px 0px 10px 0px; padding: 15px 0px 15px 15px; background-color: #eeeeee; border: thin dotted #33CCFF; font-size: 1.1em; }

This page contains various implementations of different Binary Search Trees (BSTs).

Simple BST (no balancing)
-------------------------

*   [bst.py (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-006-introduction-to-algorithms-fall-2011/7f7ba1c1c85b1ec4bd58965bfe791489_bst.py)
    *   Features: insert, find, delete\_min, ASCII art
*   [bstsize.py (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-006-introduction-to-algorithms-fall-2011/c73ee3242ff0adf838ad898c415fd267_bstsize.py)
    *   Imports and extends bst.py
    *   Augmentation to compute subtree sizes
*   [bstsize\_r.py (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-006-introduction-to-algorithms-fall-2011/866988d04cb099a077e8e93f554c5b85_bstsize_r.py)
    *   Recursive version from recitation for computing subtree sizes
    *   Features: insert, find, rank, delete

AVL tree
--------

*   [avl.py (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-006-introduction-to-algorithms-fall-2011/e1bf91495a4b705a5a7794d01029d802_avl.py)
    *   Imports and extends bst.py
    *   Features: insert, find, delete\_min, ASCII art

Testing
-------

Both bst.py and avl.py (as well as bstsize.py) can be tested interactively from a UNIX shell as follows:

*   python bst.py 10 — do 10 random insertions, printing BST at each step
*   python avl.py 10 — do 10 random insertions, printing AVL tree at each step

Alternatively, you can use them from a Python shell as follows:

\>>> import bst
>>> t = bst.BST()
>>> print t

>>> for i in range(4):
...   t.insert(i);
...
>>> print t
0
/\\
 1
 /\\
  2
  /\\
   3
   /\\
>>> t.delete\_min()
>>> print t
1
/\\
 2
 /\\
  3
  /\\

\>>> import avl
>>> t = avl.AVL()
>>> print t

>>> for i in range(4):
...   t.insert(i);
...
>>> print t
  1
 / \\
0  2
/\\ /\\
    3
    /\\
>>> t.delete\_min()
>>> print t
  2
 / \\
1  3
/\\ /\\