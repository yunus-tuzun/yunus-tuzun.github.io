# Yunus Tüzün blogu (Astro) — yerel geliştirme komutları.
# `just` tek başına listeyi gösterir.

set windows-shell := ["powershell.exe", "-NoProfile", "-ExecutionPolicy", "Bypass", "-Command"]

port := "1234"

# Recipe listesini göster
default:
    @just --list

# Bağımlılıkları kur (ilk kez veya package.json değişince)
install:
    npm install

# Geliştirme sunucusu, canlı yenilemeli — http://localhost:1234 (TR: /tr)
dev: _deps
    npx astro dev --port {{port}}

# Tip denetimi + üretim derlemesi (dist/)
build: _deps
    npm run build

# Derlenmiş siteyi yerelde sun — yayına çıkacak hâlinin aynısı
preview: build
    npx astro preview --port {{port}}

# Yalnız tip/şablon denetimi (derlemeden)
check: _deps
    npx astro check

# Derleme çıktısını ve Astro önbelleğini sil
clean:
    -Remove-Item -Recurse -Force dist, .astro -ErrorAction SilentlyContinue

# node_modules yoksa kurulumu kendiliğinden yap
[private]
_deps:
    if (-not (Test-Path node_modules)) { npm install }
