import * as Realm from 'realm-web'

export const addUser = async (id, name, email, matric_no, department) => {
  const APP_ID = "napes-website-wawfl"
  const app = new Realm.App({ id: APP_ID });
  const credentials = Realm.Credentials.anonymous();

  try {
    const user = await app.logIn(credentials);
    const addUserNow = await user.functions.addUser(id, name, email, matric_no, department)
  } catch (error) {
    console.log(error);
  }
}