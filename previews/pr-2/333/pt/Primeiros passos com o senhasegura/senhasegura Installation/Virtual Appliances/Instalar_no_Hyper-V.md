# Instalar no Hyper-V

Importar arquivos de máquina virtual com um aplicativo seguro por senha .OVA nos servidores Microsoft Windows Server que usam a função Hyper-V.

Para executar uma importação segura de máquina virtual com senha, as seguintes etapas devem ser executadas:

## Importação de máquina virtual senhasegura

- Importar a OVA senhasegura no ***Virtualbox*** ou ***Vmware***;

- Exportar uma máquina virtual no formato OVF;

- Nesse processo, um arquivo de disco rígido virtual será extraído. Este arquivo tem um formato VMDK. No entanto, para uma máquina virtual ser criada no Hyper-V, deve ser usado o formato VHD ou VHDx.;

## Conversão de arquivo de imagem de máquina virtual

1. Faça o download do Microsoft Virtual Machine Convert;

2. Importe o conversor no PowerShell;

3. Execute os seguintes comandos no PowerShell para carregar o módulo de conversão do Windows.;

    ```shell
    PS C:\WINDOWS\system32> Import-Module 'C:\Program Files\Microsoft Virtual Machine Converter\MvmcCmdlet.psd1'
    ```

4. Converta o arquivo do formato .vmdk para .vhdx através do seguinte comando:;

    ```shell
    PS C:\WINDOWS\system32> ConvertTo-MvmcVirtualHardDisk -SourceLiteralPath d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vmdk -VhdType DynamicHardDisk -VhdFormat vhdx -destination d:\ss-andrew-v3-24042017
    ```

    A seguinte mensagem será exibida:

    ```shell
    Destination
    -----------
    d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vhdx
    Source
    ------
    d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vmdk
    ```

## Criação e inicialização da máquina virtual senhasegura

No Hyper-V, crie uma máquina virtual e indique o disco no formato .vhdx.

Inicie a máquina virtual senhasegura no ambiente Hyper-V.
