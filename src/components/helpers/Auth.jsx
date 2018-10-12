import firebase from 'firebase'

const saveUser = (form) => {
  let email = form.email.value
  let userId = email.split('.').join('')
  firebase.database().ref()
  .child(`users/${userId}/info`)
  .set({
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    email: form.email.value
  })
  .then(() => alert('Creaste tu cuenta'))

}

const auth = (form) => (
  firebase.auth()
    .createUserWithEmailAndPassword(form.email.value, form.clave.value)
      .then(saveUser(form))
)

const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)

const logout = () => firebase.auth().signOut()

const resetPassword = email => firebase.auth().sendPasswordResetEmail(email)

const googleAuth = ()  =>{
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => alert(`${result.user.email} ha iniciado sesión`))
      .catch(error => alert(`Error ${error.code}: ${error.message}`))
  }

export {
  saveUser,
  auth,
  login,
  logout,
  resetPassword,
  googleAuth
}