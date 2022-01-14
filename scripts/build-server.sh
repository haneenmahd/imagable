install_packages () {
    npm install
}

build_server () {
    npm run build
}

cd server
install_packages
build_server