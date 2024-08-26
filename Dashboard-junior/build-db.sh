touch database.sqlite

# Create the database
sqlite3 database.sqlite < config/database.sql

# insert a user
sqlite3 database.sqlite "INSERT INTO users (username, password) VALUES ('admin', '$2a$10$MFbKimCz5vwlnPk3q3KwmuL8T2RJfc8X.Z2XIknKERBHAcvmdKrhC')"

#