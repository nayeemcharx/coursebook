import sqlite3
import hashlib
import os
from flask import Flask, request, jsonify

app = Flask(__name__)
DATABASE = 'vulnerable.db'


def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    # Vulnerable to SQL Injection
    conn = get_db()
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    cursor.execute(query)
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": "Login successful!"})
    else:
        return jsonify({"message": "Login failed!"}), 401


@app.route("/register", methods=["POST"])
def register():
    username = request.form.get("username")
    password = request.form.get("password")

    # Weak password storage using MD5 (not salted)
    hashed_password = hashlib.md5(password.encode()).hexdigest()

    conn = get_db()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
        conn.commit()
        return jsonify({"message": "User registered successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


@app.route("/upload", methods=["POST"])
def upload():
    file = request.files['file']
    if file:
        # Vulnerable to path traversal
        file.save(os.path.join("uploads", file.filename))
        return jsonify({"message": "File uploaded!"})
    return jsonify({"message": "No file provided"}), 400


if __name__ == "__main__":
    # Debug mode enabled - this should be disabled in production
    app.run(debug=True)
