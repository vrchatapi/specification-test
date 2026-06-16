#!/usr/bin/env pwsh
$ErrorActionPreference = 'Stop'

cd "$PSScriptRoot/.."

$releases = Invoke-RestMethod -Uri "https://api.github.com/repos/vrchatapi/specification/releases"
$downloadUrl = ($releases | Where-Object { $_.prerelease } | ForEach-Object { $_.assets } | Where-Object { $_.name -eq "openapi-internal+legacy.yaml" } | Select-Object -ExpandProperty browser_download_url -First 1)
Invoke-WebRequest -Uri $downloadUrl -OutFile "openapi.yaml"