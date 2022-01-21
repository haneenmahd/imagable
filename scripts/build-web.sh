install_packages () {
    npm install
}

build_web () {
    npm run build
}

cd web
npm install
build_web