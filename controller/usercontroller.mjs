import pool from "../config/db.js";

export const createUser = async (name, email, password) => {
  const query =
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id";
  const values = [name, email, password];
  try {
    const response = await pool.query(query, values);
    return response.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export const getUserbyEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";
  try {
    const response = await pool.query(query, [email]);
    return response.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export const getUserbyId = async (id) => {
  const query = "SELECT id, name, email FROM users WHERE id = $1";
  try {
    const response = await pool.query(query, [id]);
    return response.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};
