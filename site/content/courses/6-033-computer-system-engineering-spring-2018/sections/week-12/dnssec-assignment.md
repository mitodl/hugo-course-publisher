---
title: DNSSEC Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: d7e80479aaf338d9e79eb2f538c418b3
    name: DNSSEC Assignment
    weight: 570
    parent: 463ad0d7960d0f16fac5ad1eab91ef20
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)["Security Vulnerabilities in DNS and DNSSEC (PDF)"](http://www.chrismitchell.net/svidad.pdf) by Suranjith Ariyapperuma and Chris Mitchell. This paper is about DNSSEC. DNS, as is, is an insecure system; DNSSEC is a proposed extension to DNS to mitigate some of the security concerns. It is not yet widespread.

*   Section 2 gives an overview of DNS. Read it if you need a refresher on the protocol, but if not, you can skip it.
*   Section 3 details some of the vulnerabilities to which DNS is open.
*   Section 4 describes DNSSEC, which addresses some of the vulnerabilities in Section 3. DNSSEC has its own problems, however, which are detailed in Section 5.

As you read, think about

*   What are the consequences for users (such as yourself) of the vulnerabilities of DNS?
*   Why must DNSSEC be backwards-compatible with DNS?
*   Why are chains of trust necessary?
*   Who should be in charge of the root key?

##### Questions for Recitation

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   From a security standpoint, what does DNSSEC provide? (e.g., confidentially, authentication, etc.)
*   How does it provide that?
*   Why is DNSSEC necessary (or _is_ it necessary?), and why hasn't it been fully deployed?

As always, there are multiple answers to each of these question