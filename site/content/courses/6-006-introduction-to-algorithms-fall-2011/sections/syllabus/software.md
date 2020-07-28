---
title: Software
course_id: 6-006-introduction-to-algorithms-fall-2011
menu:
  6-006-introduction-to-algorithms-fall-2011:
    identifier: 439d0ff367dd3140f769dbfd28c87874
    type: section
    layout: section
    name: Software
    weight: 20
    parent: f57345014b07a46bd16ff4d95aef57d5
---
This course makes use of Athena, MIT's UNIX-based computing environment. OCW does not provide access to this environment.

This section covers the 6.006 programming environment setup:

[CPython 2.7]({{% getpage "courses/6-006-introduction-to-algorithms-fall-2011/sections/syllabus/software" %}}#cpython)  
[PyPy]({{% getpage "courses/6-006-introduction-to-algorithms-fall-2011/sections/syllabus/software" %}}#pypy)  
[PIP]({{% getpage "courses/6-006-introduction-to-algorithms-fall-2011/sections/syllabus/software" %}}#pip)  
[IDEs / Code Editors]({{% getpage "courses/6-006-introduction-to-algorithms-fall-2011/sections/syllabus/software" %}}#ide)  
[PyDev in Aptana Studio]({{% getpage "courses/6-006-introduction-to-algorithms-fall-2011/sections/syllabus/software" %}}#pydev)

Overview
--------

In theory, you can solve all the 6.006 assignments with nothing other than Notepad. However, in order to be efficient and make the most out of the class, you’ll need a plethora of software, such as a Python interpreter, the PIP package manager, and an IDE. You can find this software on Athena, which is the only platform that we officially support. The rest of this document will help you set up this software on your own machine. We have provided instructions below for the following operating systems / distributions:

1.  [Ubuntu Linux 11.04 or 11.10](http://www.ubuntu.com/download/ubuntu/download)
2.  Mac OS X 10.7 (Lion)
3.  Windows 7

### Note on Windows Support

Windows is tricky to support because it does not obey standards such as POSIX out of the box, and we don’t use it for development. The course staff will attempt to help you with problems on Windows for the purpose of completing all the assignments, but please note that none of us use it on our own computers.

### Python

We will test your code against the CPython 2.7 and PyPy interpreters. Reasonable code should behave identically in CPython and PyPy, but we sometimes use PyPy for performance reasons. You should develop under CPython, and only use PyPy if some weird issue arises. This document walks you through installing both flavors.

CPython 2.7
-----------

### Ubuntu Linux

Run the following command in a Terminal window:  
sudo apt-get install -y python2.7 python-profiler

Python 2.7 should now be installed. Run python --version to make sure that the version is 2.7.

### Mac OS X

We support the Python interpreter that comes with OS X 10.7 (Lion).

If you have OS X 10.6 (Snow Leopard), [this Python 2.7.2 package (DMG)](http://www.python.org/ftp/python/2.7.2/python-2.7.2-macosx10.6.dmg) will most likely get you through the class, although the course staff will be unable to help you if you get stuck.

### Windows 7

1.  Download [Python 2.7.2 (MSI)](http://www.python.org/ftp/python/2.7.2/python-2.7.2.msi) and follow the wizard to install into the default location (C:\\Python27\\)
2.  Add Python to the PATH
    1.  Go to Start → Control Panel → System and Security → System
    2.  On the left, click on Advanced system settings
    3.  Make sure you’re on the Advanced tab, and click on the Environment Variables button
    4.  In the top list, find the PATH entry and click on it. Then, click the Edit… button.
    5.  Append the following to the end of the entry (semicolon, spacing, and quotes matter; use the folder where you installed Python instead if you didn’t use the default):  
        ;"C:\\Python27"
    6.  If you had any open command prompt windows, close and reopen them so that they reflect the PATH change.

PyPy
----

### Ubuntu Linux

1.  Download a Linux binary from the [PyPy download page](http://pypy.org/download.html).
2.  Unpack it in the Downloads folder by double-clicking on the package.
3.  Open a Terminal window, and type the following commands:
4.  Install a required library:  
    sudo apt-get install libssl0.9.8
5.  Move pypy to a different location:  
    sudo mv ~/Downloads/pypy-1.6 /usr/local/pypy
6.  Make a symlink to pypy  
    sudo ln -s /usr/local/pypy/bin/pypy /usr/local/bin/pypy

You should now be able to run PyPy by typing pypy, unless you removed /usr/local/bin from your PATH.

### Mac OS X

1.  Download [PyPy 1.6 for OS X (TAR)](https://bitbucket.org/pypy/pypy/downloads/pypy-1.6-osx64.tar.bz2).
2.  Unpack it in the Downloads folder by double-clicking on the package.
3.  Open a Terminal window, and type the following commands:
4.  Move PyPy to a different location:  
    sudo mv ~/Downloads/pypy-1.6 /usr/local/pypy
5.  Make a symlink to pypy  
    sudo ln -s /usr/local/pypy/bin/pypy /usr/local/bin/pypy

You should now be able to run pypy just type typing pypy, as /usr/local/bin should be in your PATH.

### Windows 7

1.  Download [PyPy 1.6 for Windows (EXE)](https://bitbucket.org/pypy/pypy/downloads/pypy-1.6-win32-c.zip).
2.  Extract the zip file to C:\\pypy-1.6-win32-c
3.  The main executable is C:\\pypy-1.6-win32-c\\pypy-c.exe

PIP
---

Make sure you have Python and PyPy installed before installing pip.

### Ubuntu Linux

1.  Open a new Terminal window
2.  Install pip for CPython  
    sudo apt-get install -y python-pip python-virtualenv
3.  Change directories into somewhere like the Downloads directory  
    cd ~/Downloads
4.  Run the following commands to fetch the required files:  
    sudo apt-get install -y curl  
    curl -O http://python-distribute.org/distribute\_setup.py  
    curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py
5.  Install pip for PyPy  
    pypy distribute\_setup.py  
    pypy get-pip.py
6.  pip is now installed in /usr/local/pypy/bin/pip. Create a symlink to it:  
    sudo ln -s /usr/local/pypy/bin/pip /usr/local/bin/pypy-pip

You can test whether you were able to install pip for PyPy correctly by running pypy-pip install pygments and then running pypy and trying to import pygments. If it succeeds, and pygments.\_\_version\_\_ looks like a version number, then you’ve installed PIP successfully. Do the same with pip for CPython by running sudo pip install pygments and then running python and trying to import pygments. Then check the pygments version again.

### Mac OS X

1.  Open a new Terminal window
2.  Change directories into somewhere like the Downloads directory  
    cd ~/Downloads
3.  Run the following commands to fetch the required files:  
    curl -O http://python-distribute.org/distribute\_setup.py  
    curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py
4.  Install pip for PyPy  
    pypy distribute\_setup.py  
    pypy get-pip.py
5.  pip is now installed in /usr/local/pypy/bin/pip. Create a symlink to it:  
    sudo ln -s /usr/local/pypy/bin/pip /usr/local/bin/pypy-pip
6.  Install pip for CPython  
    sudo python distribute\_setup.py  
    sudo python get-pip.py

You can test whether you were able to install pip for PyPy correctly by running pypy-pip install pygments and then running pypy and trying to import pygments. If it succeeds, and pygments.\_\_version\_\_ looks like a version number, then you’ve installed PIP successfully. Do the same with pip for CPython by running pip install pygments and then running python and trying to import pygments. Then check the pygments version again.

### Windows 7

1.  Download and install [setuptools for Python 2.7](https://pypi.org/project/setuptools/).
2.  Add the Scripts folder to the PATH
    1.  Go to Start → Control Panel → System and Security → System
    2.  On the left, click on Advanced system settings
    3.  Make sure you’re on the Advanced tab, and click on the Environment Variables button
    4.  In the top list, find the PATH entry and click on it. Then, click the Edit... button.
    5.  Append the following to the end of the entry (semicolon, spacing, and quotes matter; use the folder where you installed Python instead if you didn’t use the default):  
        ;"C:\\Python27\\Scripts"
    6.  If you had any open command prompt windows, close and reopen them so that they reflect the PATH change.

Open a new command prompt window and type easy\_install pip  
If this step fails, make sure you edited the PATH correctly in the previous step. For some students, leaving out the quotes (i.e. adding ;C:\\Python27\\Scripts to the PATH) worked better.

pip should now be installed for CPython. You can test it by opening a command prompt window and running pip install pygments, then running python and checking that import pygments doesn’t fail and that pygments.\_\_version\_\_ looks like a version number.

Now, install pip for PyPy:

1.  Download these two files to C:\\pypy-1.6-win32-c\\pypy-1.6 (or wherever else you installed PyPy). If they open in your browser, you can typically go to the File menu and choose Save File As... to save them to your desired location (in this case, the PyPy folder).  
    [distribute\_setup.py (PY)](http://python-distribute.org/distribute_setup.py)  
    [get-pip.py (PY)](https://raw.github.com/pypa/pip/master/contrib/get-pip.py)
2.  Open a new command prompt window, and change directories to your PyPy folder:  
    cd C:\\pypy-1.6-win32-c\\pypy-1.6
3.  Run the following commands to install pip for PyPy:  
    pypy-c distribute\_setup.py  
    pypy-c get-pip.py

pip should now be installed for PyPy in C:\\pypy-1.6-win32-c\\pypy-1.6\\bin. You can test it by opening a command prompt window and running C:\\pypy-1.6-win32-c\\pypy-1.6\\bin\\pip install pygments, then running C:\\pypy-1.6-win32-c\\pypy-1.6\\pypy-c and checking that import pygments doesn’t fail and that pygments.\_\_version\_\_ looks like a version number.

IDEs / Code Editors
-------------------

An IDE (Integrated Development Environment) can help you develop Python programs more efficiently.

IDLE comes with Python, and is a good default choice. IDLE is installed by default on Windows and Mac OS X. On Ubuntu, you can install it with the following command: sudo apt-get install idle

PyDev in Aptana Studio
----------------------

### Ubuntu Linux

1.  Launch Software Sources from the Ubuntu Menu. Select the Other Software tab, then select the Canonical Partners repositories. Close the dialog when done.
2.  Open a Terminal window.
3.  Update your software cache.  
    sudo apt-get update
4.  Install the prerequisite software.  
    sudo apt-get install -y sun-java6-jdk sun-java6-fonts ant ant-optional  
    libglade2-0 libgnome2-0 libgnomecanvas2-0 libgnomecanvas2-common  
    libgnomeui-0 libgnomeui-common sat4j git
5.  [Download Aptana Studio](http://www.aptana.com/) and extract it in your home directory.

### Mac OS X

[Download and install Aptana Studio](http://www.aptana.com/).

### Windows

1.  Download the latest version of the [Java SE 6 JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  [Download and install Aptana Studio](http://www.aptana.com/).