Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "C:\Scripts\runnodeserver.bat" & Chr(34), 0
Set WshShell = Nothing