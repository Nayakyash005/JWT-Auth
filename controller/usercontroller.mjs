import db from "pg";

export const createUser = (name, email, password, callback) => {
  try {
    const responce = db.Query(
      "insert into user(name,email,password) values($1,$2,$3) returning id",
      [username, email, password]
    );
    console.log(responce.rows[0]);
    return responce.rows[0];
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getUserbyEmail = (email) => {
  try {
    const responce = db.Query("Select * from user where email = $1");
    console.log(responce.rows);
    return responce.rows[0];
  } catch (error) {
    console.log("error ", error);
    return error;
  }
};

export const getUserbyId = (id) => {
  try {
    const result = db.Query("selec * from user where user = $1", [id]);
    console.log(result.rows);
    return result.rows[0];
  } catch (error) {
    console.log("error ", error);
    return error;
  }
};
