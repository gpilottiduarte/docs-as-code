# Como configurar a localização da instância

Neste documento, você encontrará os passos de como configurar a localização do senhasegura.

## Visualizar opções do comando
Utilizando o comando `orbit locale` você pode definir as configurações de localização, fuso horário do servidor e idioma do navegador interno.
:::(Error) (Importante)
As configurações de idioma da interface da Web e dos sistemas proxy são alteradas por meio das preferências do usuário e por meio de comandos dedicados dos sistemas proxy.
:::
:::(Warning) (Atenção)
Reinicie o servidor após executar o comando para aplicar o novo idioma ao sistema de banco de dados.
:::
```
mt4adm@vmdf-giskard:~$ sudo orbit locale --help
Usage: orbit locale

Language and locale settings

Flags:
  -h, --help     Show context-sensitive help.

      --force    Force the command execution, never prompt

lcle
      --timezone=STRING          Timezone string
  -l, --browser-locale=STRING    Specifies the browser locale for http sessions.

act
  --show
Listar a configuração atual
Utilize o argumento `– --show`.
mt4adm@vmdf-giskard:~$ sudo orbit locale --show
Timezone
Timezone is 'America/Sao_Paulo'
``` 
## Configurar o idioma do navegador interno

1. Utilize o argumento `--browser-locale`.
``` 
mt4adm@vmdf-giskard:~$  sudo orbit locale --browser-locale en-gb
mt4adm@vmdf-giskard:~$
```
Consulte a tabela a seguir com os códigos de idiomas válidos para essa configuração:
| Código | Língua            | Código | Língua              | Código | Língua               |
|--------|-------------------|--------|---------------------|--------|----------------------|
| `ach`  | Acoli             | `af`   | Africâner           | `all`  | Todos os pacotes para Firefox ESR (meta) |
| `an`   | Aragonês          | `ar`   | Árabe               | `ast`  | Asturiano             |
| `az`   | Azerbaijano       | `be`   | Bielorrusso         | `bg`   | Búlgaro              |
| `bn`   | Bengali           | `br`   | Bretão              | `bs`   | Bósnio                |
| `ca`   | Catalão           | `ca-valencia` | Catalão (Valência) | `cak` | Kaqchikel             |
| `cs`   | Tcheco            | `cy`   | Galês               | `da`   | Dinamarquês           |
| `de`   | Alemão            | `dsb`  | Sorábio inferior    | `en-ca`| Inglês (Canadá)       |
| `en-gb`| Inglês (Reino Unido) | `eo` | Esperanto         | `es-ar`| Espanhol (Argentina)  |
| `es-cl`| Espanhol (Chile)  | `es-es`| Espanhol (Espanha) | `es-mx`| Espanhol (México)     |
| `et`   | Estoniano         | `eu`   | Basco               | `fa`   | Persa                 |
| `ff`   | Fulani            | `fi`   | Finlandês           | `fr`   | Francês               |
| `fy-nl`| Frísio ocidental (Países Baixos) | `ga-ie` | Irlandês (Irlanda) | `gd` | Gaélico escocês   |
| `gd`   | Estoniano         | `gl`   | Galego              | `gn`   | Guaraní               |
| `gu-in`| Gujarati (Índia) | `he`   | Hebraico            | `hi-in`| Hindi (Índia)         |
| `hr`   | Croata            | `hsb`  | Sorábio superior    | `hu`   | Húngaro               |
| `hy-am`| Armênio (Armênia)| `ia`   | Interlíngua         | `id`   | Indonésio             |
| `is`   | Islandês          | `it`   | Italiano            | `ja`   | Japonês               |
| `ka`   | Georgiano         | `kab`  | Cabila              | `kk`   | Cazaque               |
| `km`   | Khmer central     | `kn`   | Canarês             | `ko`   | Coreano               |
| `lij`  | Lígure            | `lt`   | Lituano             | `lv`   | Letão                 |
| `mk`   | Macedônio         | `mr`   | Marata              | `ms`   | Malaio                |
| `my`   | Birmanês          | `nb-no`| Norueguês Bokmål (Noruega) | `ne-np` | Nepalês (Nepal)|
| `nl`   | Holandês          | `nn-no`| Norueguês Nynorsk (Noruega) | `oc` | Occitano           |
| `pa-in`| Punjabi (Índia)   | `pl`   | Polonês             | `pt-br`| Português (Brasil)    |
| `pt-pt`| Português (Portugal) | `rm` | Romanche           | `ro`   | Romeno                |
| `ru`   | Russo             | `si`   | Cingalês            | `sk`   | Eslovaco              |
| `sl`   | Esloveno          | `son`  | Songai              | `sq`   | Albanês               |
| `sr`   | Sérvio            | `sv-se`| Sueco (Suécia)      | `ta`   | Tâmil                 |
| `te`   | Telugu            | `th`   | Tailandês           | `tl`   | Tagalo                |
| `tr`   | Turco             | `trs`  | Triqui de Chicahuaxtla | `uk`| Ucraniano           |
| `ur`   | Urdu              | `uz`   | Uzbeque             | `vi`   | Vietnamita            |
| `xh`   | Xhosa             | `zh-cn`| Chinês (China)      | `zh-tw`| Chinês (Taiwan)       |
| `el`   | Grego moderno     | `sri`  | Bramânico           |        | Devanagari            |
|        |                   |        | Devanagari estendido|        | Extensões védicas     |
|        |                   |        | Latina estendida-A  |        | Latina estendida-B    |

## Configurar uma nova localização
Para configurar uma nova localização você deve antes ter conhecimento das possibilidades. As localizações disponíveis estão no diretório `/usr/share/zoneinfo`.
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


