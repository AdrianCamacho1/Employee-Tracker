INSERT INTO department (name)
VALUES ("Fishing"),
("Drivers"),
("Delivery")

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bender", "Rodrigez", 2, null),
("Philip", "Fry", 2, null),
("Hubert", "Fawnsworth", 2, 1),
("Steve", "Irwin", 1, 1)

INSERT INTO role (title, salary, department_id)
VALUES ("Fisherman", 30000, 1),
("Courrier", 20000, 4)