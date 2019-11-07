---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
content: ""
menu: 
    main:
        name: "{{ replace .Name "-" " " | title }}"
---