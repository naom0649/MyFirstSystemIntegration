import sqlite3
import mysql.connector

# Opret forbindelse til MySQL-databasen
mysql_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="N123naomi",
    database="mysql_database"
)

# Opret forbindelse til SQLite-databasen
sqlite_connection = sqlite3.connect('sqlite_database.db')
sqlite_cursor = sqlite_connection.cursor()

# Hent data fra MySQL-databasen
mysql_cursor = mysql_connection.cursor()
mysql_cursor.execute("SELECT * FROM people")  # Rettede stavefejl her
data_rows = mysql_cursor.fetchall()

# Indsæt data i SQLite-databasen
for row in data_rows:
    # Brug "?" som placeholder for parameter i SQL-forespørgslen og overfør værdierne i et tuple
    sqlite_cursor.execute("INSERT INTO people (name, age) VALUES (?, ?)", row)

# Gem ændringer i SQLite-databasen
sqlite_connection.commit()

# Luk forbindelserne
mysql_cursor.close()
mysql_connection.close()
sqlite_cursor.close()
sqlite_connection.close()

print("Data migreret fra MySQL til SQLite!")
