window.abrirLogin = function () {
  Swal.fire({
    title: '<span style="color:#ececf0;">Entrar no Tenebris</span>',
    
    html: `
      <input id="email" class="swal2-input custom-input" placeholder="Email">
      <input id="senha" type="password" class="swal2-input custom-input" placeholder="Senha">
    `,

    confirmButtonText: 'Entrar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',

    background: '#0b1020',
    color: '#ececf0',

    confirmButtonColor: '#8B0000',
    cancelButtonColor: '#1e293b',

    customClass: {
      popup: 'custom-popup',
      confirmButton: 'custom-btn',
      cancelButton: 'custom-btn-cancel'
    },

    preConfirm: () => {
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      if (!email || !senha) {
        Swal.showValidationMessage('Preencha todos os campos!');
      }

      return { email, senha };
    }

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Bem-vindo 😈',
        text: 'Login realizado com sucesso!',
        background: '#0b1020',
        color: '#ececf0',
        confirmButtonColor: '#8B0000'
      });
    }
  });
}