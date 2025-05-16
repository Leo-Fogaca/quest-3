const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de Perfil">
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
            </div>
        </div>
        `
        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML +=
            `<div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }else {
            this.userProfile.innerHTML +=
            `<div class="repositories section">
                <h2>Repositorios</h2>
                <p>Não tem repositórios ainda 😥</p>
            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h2>Usuário não encontrado 😕</h2>'
    }
}

export { screen }