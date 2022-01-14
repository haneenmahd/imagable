install_packages () {
    npm install
}

build_web () {
    npm run build
}

cd web
install_packages
build_web