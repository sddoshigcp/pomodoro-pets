const express = require("express");

const apiRouter = express.Router();

const db = require("./database/DBConnection");

//Security stuff?
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;

/*************************************** MOCK ***************************************/

apiRouter.get("/mock", (req, res) => {
    db.query("SELECT * FROM mock")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status;
            res.send(err);
        });
});

/*************************************** Users ***************************************/

apiRouter.get("/users", (req, res) => {
    db.query("SELECT * FROM users")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status;
            res.send(err);
        });
});

apiRouter.get("/users/:id", (req, res) => {
    db.query("SELECT * FROM users WHERE id = ?", [req.params.id])
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status;
            res.send(err);
        });
});

apiRouter.post("/users", (req, res) => {
    const { Username, Password } = req.body;
    bcrypt.hash(Password, saltRounds, (err, hashedPassword) => {
        if (err) {
            res.status(500).send(err);
        } else {
            db.query(
                "INSERT INTO users (Username, Password, AccountCreationDate, CreatedAt, ModifiedLast, ModifiedBy) VALUES (?, ?, ?, ?, ?, ?)",
                [
                    Username,
                    hashedPassword,
                    new Date(),
                    new Date(),
                    new Date(),
                    0,
                ]
            )
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500);
                    res.send(err);
                });
        }
    });
});

apiRouter.put("/users/:id", (req, res) => {
    const { Username, Password } = req.body;
    bcrypt.hash(Password, saltRounds, (err, hashedPassword) => {
        if (err) {
            res.status(500).send(err);
        } else {
            db.query(
                "UPDATE users SET Username = ?, Password = ?, ModifiedLast = ?, ModifiedBy = ? WHERE id = ?",
                [Username, hashedPassword, new Date(), 0, req.params.id]
            )
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500);
                    res.send(err);
                });
        }
    });
});

/*************************************** Profile ***************************************/

//get a profile by profile id
apiRouter.get("/profiles/:id", (req, res) => {
    db.query("SELECT * FROM Profiles WHERE Id = ?", [req.params.id])
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Get a profile by userid
apiRouter.get("/profiles/user/:userid", (req, res) => {
    db.query("SELECT * FROM Profiles WHERE UserId = ?", [req.params.userid])
        .then((result) => {

            console.log("result: ", result)
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Add a profile
apiRouter.post("/profiles", (req, res) => {
    db.query(
        "INSERT INTO Profiles (UserId, PomodoroPoints, TotalMinutes, MinutesToday, MinutesThisWeek, CreatedAt, ModifiedLast, ModifiedBy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
            req.body.UserId,
            req.body.PomodoroPoints,
            req.body.TotalMinutes,
            req.body.MinutesToday,
            req.body.MinutesThisWeek,
            new Date(),
            new Date(),
            req.body.ModifiedBy,
        ]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Remove a profile
apiRouter.delete("/profiles/:id", (req, res) => {
    db.query("DELETE FROM Profiles WHERE Id = ?", [req.params.id])
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Edit a profile
apiRouter.put("/profiles/:id", (req, res) => {
    db.query(
        "UPDATE Profiles SET UserId = ?, PomodoroPoints = ?, TotalMinutes = ?, MinutesToday = ?, MinutesThisWeek = ?, ModifiedLast = ?, ModifiedBy = ? WHERE Id = ?",
        [
            req.body.UserId,
            req.body.PomodoroPoints,
            req.body.TotalMinutes,
            req.body.MinutesToday,
            req.body.MinutesThisWeek,
            new Date(),
            req.body.ModifiedBy,
            req.params.id,
        ]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Increase/Decrease points
apiRouter.put("/profiles/:id/points", (req, res) => {
    db.query(
        "UPDATE Profiles SET PomodoroPoints = PomodoroPoints + ?, ModifiedLast = ?, ModifiedBy = ? WHERE Id = ?",
        [
            req.body.PomodoroPoints,
            new Date(),
            req.body.ModifiedBy,
            req.params.id,
        ]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Increase total minutes
apiRouter.put("/profiles/:id/totalminutes", (req, res) => {
    db.query(
        "UPDATE Profiles SET TotalMinutes = TotalMinutes + ?, ModifiedLast = ?, ModifiedBy = ? WHERE Id = ?",
        [req.body.TotalMinutes, new Date(), req.body.ModifiedBy, req.params.id]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Increase minutes today
apiRouter.put("/profiles/:id/minutestoday", (req, res) => {
    db.query(
        "UPDATE Profiles SET MinutesToday = MinutesToday + ?, ModifiedLast = ?, ModifiedBy = ? WHERE Id = ?",
        [req.body.MinutesToday, new Date(), req.body.ModifiedBy, req.params.id]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

// Increase minutes this week
apiRouter.put("/profiles/:id/minutesweek", (req, res) => {
    db.query(
        "UPDATE Profiles SET MinutesThisWeek = MinutesThisWeek + ?, ModifiedLast = ?, ModifiedBy = ? WHERE Id = ?",
        [
            req.body.MinutesThisWeek,
            new Date(),
            req.body.ModifiedBy,
            req.params.id,
        ]
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send(err);
        });
});

/*************************************** Login ***************************************/

// Login route
apiRouter.post("/login", (req, res) => {

    const { Username, Password } = req.body;

    // Fetch the user from the database
    db.query("SELECT * FROM users WHERE Username = ?", [Username])
        .then((users) => {

            if (users.results.length > 0) {
                const user = users.results[0];

                // Compare the provided password with the stored hashed password
                bcrypt.compare(Password, user.Password, (err, result) => {

                    if (result) {
                        // Passwords match, generate a JWT
                        const token = jwt.sign(
                            { id: user.id },
                            process.env.JWT_SECRET,
                            { expiresIn: "1h" }
                        );

                        // Remove sensitive data
                        delete user.Password;

                        // Return the token and user data
                        res.json({ token, user });
                    } else {
                        // Passwords don't match
                        res.status(401).json({
                            message: "Invalid credentials",
                        });
                    }
                });
            } else {
                // User not found
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});


// Logout route
apiRouter.post("/logout", (req, res) => {
    // In a real-world application, you might want to add the token to a "blacklist" to prevent it from being used again
    res.json({ message: "Logged out" });
});

module.exports = apiRouter;
