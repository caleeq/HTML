# UK job file

<ftp://pcvips-emea-data.eu.averydennison.net/Flow/TXT-Backup/>  
Tianliang shen  
ongoingworkat2022  

1. dataset already in DW00083 in vips
2. font size for EUWash and KRWash not match AW
3. font size for fiber and specialCare is control in LUT Puma_Lookups, how should we update the font ? in LUT directly or in labelkey logic ? 

autobatch: 可以，多就IT  
1 po 1 batch: autobatch?IT  
loa hold: 可以，多就IT  
autobatch by po 找batchman  

1. learn more about vips setup error, locate the cause and remark for reference later
2. pay more attention to email or ticket about the vips issue, know the reason and solution
3. if have any question, dont be hesitate to ask the people include experice teammate or support IT

| itemcode      | dataset | lookup    |
| ------------- | ------- | --------- |
| BRPS-142-US_R | DW01158 | BR        |
| BRPS-142-CA_R | DW01284 | BR        |
| BRPS-142-OL-R | DW00363 | BR + BRFS |

«put styled unquoted Size1»  
«put styled Size1»  

[AR70820](https://drive.google.com/drive/folders/1j00FCoTlFS4t68_TxFPmiJ5U9c_eBI76?usp=sharing) 

1. Ordering Method: callout or manual
2. Item Name in Ordering System: cannot have hyphen
3. Ask DSS provide test order in D2Comm: A6QX9

«fields BatchNo, LabelRef, PrintRun, UserInfo, NoUp, STYLE, SEASON, MONTH, SUPPLIER, FACTORY, COUNTRY, REFERENCE, CustOrdNo, CustPO, CurrentDate, ItemCode
«put hidden BatchNo marked “A”
«put hidden LabelRef marked “B”
«put hidden PrintRun marked “C”
«put hidden UserInfo marked “D”
«put hidden LogoColor marked “E”
«put hidden ItemCode marked “F”
«put hidden CustPO marked “G”
«put hidden CustOrdNo marked “H”
«put hidden CurrentDate marked “I”
«repeat 1

«put styled mNo»
«put styled CertNo»
«Style»
«SizeCode»
«put styled UPC»
 «char 1 to 1 of HRI» «char 2 to 6 of HRI» «char 7 to 11 of HRI» «char 12 to 12 of HRI»
«put styled STYLE»
«put styled SEASON»
«put styled MONTH»
«put styled SUPPLIER»
«put styled FACTORY»
«put styled COUNTRY»
«put styled REFERENCE»

## AR84373

Layouts approved, but do not put LIVE yet.
Waiting for RB to send their new data feed in Mid March then can put
items to LIVE.

## AR84635

Please await completion of other South America
Entity Name Change developments before going live. When go live is
requested by DSS, please mark AR84634 and AR84635 as complete, but
only go live on U8 version (AR84634, GLID # 4-238277-000-01).

AD-128045698    580662
AD-128045700
AD-128045696
AD-128045702
AD-128045694
AD-128045704
AD-128045708

AD-128045710
AD-128045714
AD-128045716
AD-128045718
AD-128045720
AD-128046273-1
AD-128046268-1
