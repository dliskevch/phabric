CREATE TABLE {$NAMESPACE}_pastebin.pastebin_paste (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  phid VARCHAR(64) BINARY NOT NULL,
  authorPHID VARCHAR(64) BINARY NOT NULL,
  filePHID VARCHAR(64) BINARY NOT NULL,
  dateCreated INT UNSIGNED NOT NULL,
  dateModified INT UNSIGNED NOT NULL
);
