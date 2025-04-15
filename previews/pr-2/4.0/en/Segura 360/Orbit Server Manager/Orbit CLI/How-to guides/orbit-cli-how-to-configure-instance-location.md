# How to configure instance location

In this document, you’ll find the steps on how to configure the location of Segura.

## View command options
You can define localization settings, server time zone, and internal browser language using the `orbit locale` command.
:::(Error) (Important)
Changes in web interface language and proxy system languages are made through user preferences and dedicated proxy system commands.
:::
:::(Warning) (Attention)
Restart the server after executing the command to apply the new language to the database system.
:::
```
mt4adm@vmdf-giskard:~$ sudo orbit locale --help
Usage: orbit locale

Language and locale settings

Flags:
 -h, --help Show context-sensitive help.
 --force Force the command execution, never prompt

lcle
 --timezone=STRING Timezone string
 -l, --browser-locale=STRING Specifies the browser locale for http sessions.

act
 --show
List current configuration
Use the --show argument.

mt4adm@vmdf-giskard:~$ sudo orbit locale --show
Timezone
Timezone is 'America/Sao_Paulo'
``` 
## Configure internal browser language

1. Use the `--browser-locale` argument.

```
mt4adm@vmdf-giskard:~$ sudo orbit locale --browser-locale en-gb
mt4adm@vmdf-giskard:~$
```
Refer to the following table with valid language codes for this configuration:

| Code | Language            | Code | Language              | Code | Language               |
|--------|-------------------|--------|---------------------|--------|----------------------|
| `ach`  | Acoli             | `af`   | Afrikaans           | `all`  | All packages for Firefox ESR (meta) |
| `an`   | Aragonese         | `ar`   | Arabic              | `ast`  | Asturian              |
| `az`   | Azerbaijani       | `be`   | Belarusian          | `bg`   | Bulgarian             |
| `bn`   | Bengali           | `br`   | Breton              | `bs`   | Bosnian               |
| `ca`   | Catalan           | `ca-valencia` | Catalan (Valencia) | `cak` | Kaqchikel             |
| `cs`   | Czech             | `cy`   | Welsh               | `da`   | Danish                |
| `de`   | German            | `dsb`  | Lower Sorbian       | `en-ca`| English (Canada)      |
| `en-gb`| English (United Kingdom) | `eo` | Esperanto     | `es-ar`| Spanish (Argentina)   |
| `es-cl`| Spanish (Chile)   | `es-es`| Spanish (Spain)     | `es-mx`| Spanish (Mexico)      |
| `et`   | Estonian          | `eu`   | Basque              | `fa`   | Persian               |
| `ff`   | Fulah             | `fi`   | Finnish             | `fr`   | French                |
| `fy-nl`| Western Frisian (Netherlands) | `ga-ie` | Irish (Ireland) | `gd` | Scottish Gaelic       |
| `gd`   | Estonian          | `gl`   | Galician            | `gn`   | Guarani               |
| `gu-in`| Guzerate (India)  | `he`   | Hebrew              | `hi-in`| Hindi (India)         |
| `hr`   | Croatian          | `hsb`  | Upper Sorbian       | `hu`   | Hungarian             |
| `hy-am`| Armenian (Armenia)| `ia`   | Interlingua         | `id`   | Indonesian            |
| `is`   | Icelandic         | `it`   | Italian             | `ja`   | Japanese              |
| `ka`   | Georgian          | `kab`  | Kabyle              | `kk`   | Kazakh                |
| `km`   | Central Khmer     | `kn`   | Kannada             | `ko`   | Korean                |
| `lij`  | Ligurian          | `lt`   | Lithuanian          | `lv`   | Latvian               |
| `mk`   | Macedonian        | `mr`   | Marathi             | `ms`   | Malay                 |
| `my`   | Burmese           | `nb-no`| Norwegian Bokmål (Norway) | `ne-np` | Nepali (Nepal)  |
| `nl`   | Dutch             | `nn-no`| Norwegian Nynorsk (Norway) | `oc` | Occitan           |
| `pa-in`| Panjabi (India)   | `pl`   | Polish              | `pt-br`| Portuguese (Brazil)   |
| `pt-pt`| Portuguese (Portugal) | `rm` | Romansh            | `ro`   | Romanian              |
| `ru`   | Russian           | `si`   | Sinhala             | `sk`   | Slovak                |
| `sl`   | Slovenian         | `son`  | Songhais            | `sq`   | Albanian              |
| `sr`   | Serbian           | `sv-se`| Swedish (Sweden)    | `ta`   | Tamil                 |
| `te`   | Telugu            | `th`   | Thai                | `tl`   | Tagalog               |
| `tr`   | Turkish           | `trs`  | Chicahuaxtla Triqui | `uk`   | Ukrainian             |
| `ur`   | Urdu              | `uz`   | Uzbek               | `vi`   | Vietnamese            |
| `xh`   | Xhosa             | `zh-cn`| Chinese (China)     | `zh-tw`| Chinese (Taiwan)      |
| `el`   | Modern Greek      | `sri`  | Brahmic             |        | Devanagari            |
|        |                   |        | Devanagari Extended|        | Vedic Extensions      |
|        |                   |        | Latin Extended-A    |        | Latin Extended-B      |

## Configure a new location
To configure a new location, you must first know the possibilities. Available locations are in the `/usr/share/zoneinfo` directory.
```
mt4adm@vmdf-giskard:~$ sudo orbit locale --timezone=Europe/Paris
Are you sure you want to proceed: y
Done!
No errors reported

Restarting the database service. Please wait...
Are you sure you want to proceed: y
Done!
No errors reported
``` 



