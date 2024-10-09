# Write your MySQL query statement below
SELECT name, IFNULL(SUM(distance), 0) as travelled_distance FROM Users u
    LEFT JOIN Rides r on u.id = r.user_id
    GROUP BY u.id
    ORDER BY 2 DESC, 1 ASC