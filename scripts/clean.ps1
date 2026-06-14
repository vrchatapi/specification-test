#!/usr/bin/env pwsh
$ErrorActionPreference = 'Stop'

cd "$PSScriptRoot/.."

Remove-Item -Path "data/state" -Recurse -ErrorAction SilentlyContinue

Remove-Item -Path "node_modules/.cache/ava" -Recurse -ErrorAction SilentlyContinue

