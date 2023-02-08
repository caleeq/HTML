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

| WebOrder       | Item                   | Batch  |
| -------------- | ---------------------- | ------ |
| AD-128045698   | 177456_NRF_CKP_238_V   | 580662 |
| AD-128045700   | 177458_NRF_CKP_326_V   | 580874 |
| AD-128045696   | 177465_NRF_CKP_2593_V  | 580875 |
| AD-128045702   | 177470_NRF_CKP_1485_V  | 580876 |
| AD-128045694   | 177463_NRF_CKP_1375_V  | 580877 |
| AD-128045704   | 177455_NRF_CKP_131_V   | 580878 |
| AD-128045708   | 177471_NRF_CKP_352_V   | 580880 |
| AD-128045710   | 177459_NRF_CKP_355_V   | 580880 |
| AD-128045714   | 177457_NRF_CKP_300_V   | 580882 |
| AD-128045716   | 177469_NRF_CKP_256_V   | 580883 |
| AD-128045718   | 177462_NRF_CKP_CG4_V   | 580884 |
| AD-128045720   | 177466_NRF_CKP_BLANK_V | 580885 |
| AD-128046273-1 | 177455_NRF_CKP_131_V   | 580887 |
| AD-128046273-1 | 177456_NRF_CKP_238_V   | 580889 |
| AD-128046273-1 | 177457_NRF_CKP_300_V   | 580890 |
| AD-128046273-1 | 177458_NRF_CKP_326_V   | 580891 |
| AD-128046273-1 | 177459_NRF_CKP_355_V   | 580892 |
| AD-128046273-1 | 177460_NRF_CKP_485_V   | 580893 |
| AD-128046273-1 | 177461_NRF_CKP_488_V   | 580895 |
| AD-128046273-1 | 177462_NRF_CKP_CG4_V   | 580896 |
| AD-128046273-1 | 177463_NRF_CKP_1375_V  | 580898 |
| AD-128046273-1 | 177464_NRF_CKP_YLW_V   | 580900 |
| AD-128046273-1 | 177465_NRF_CKP_2593_V  | 580901 |
| AD-128046273-1 | 177466_NRF_CKP_BLANK_V | 580903 |
| AD-128046273-1 | 177467_NRF_CKP_372_V   | 580904 |
| AD-128046273-1 | 177468_NRF_CKP_297_V   | 580905 |
| AD-128046273-1 | 177469_NRF_CKP_256_V   | 580907 |
| AD-128046273-1 | 177470_NRF_CKP_1485_V  | 580908 |
| AD-128046273-1 | 177471_NRF_CKP_352_V   | 580910 |
| AD-128046273-1 | 177472_NRF_CKP_4735_V  | 580912 |
| AD-128046268-1 |                        |        |
