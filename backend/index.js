import express from 'express'
import mysql from "mysql2"
import cors from "cors"

const app2 = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nayan#123",
    database: "buttermeup"
});

app2.use(express.json())
app2.use(cors())

app2.get("/", (req, res) => {
    res.json("hello this is backend")
})

app2.get("/product", (req, res) => {
    const q = "select * from product"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/store_detail", (req, res) => {
    const q = "SELECT store.*, st_phone.SPh FROM store LEFT JOIN st_phone ON store.ST_ID = st_phone.Sto_ID WHERE store.ST_ID = ? "
    const WID = [req.body.WID]

    db.query(q, [WID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app2.post("/warehouse_detail", (req, res) => {
    const q = "SELECT warehouse.*, w_phone.WPh FROM warehouse LEFT JOIN w_phone ON warehouse.WID = w_phone.Whr_ID WHERE warehouse.WID = ? "
    const WID=[req.body.WID]
    
    db.query(q,[WID] ,(err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/store_warehouse", (req, res) => {
    const q = "SELECT * FROM delivers_to WHERE storeID = ? ;"
    const WID = [req.body.WID]

    db.query(q, [WID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/warehouse_supplier", (req, res) => {
    const q = "SELECT * FROM supplier WHERE sid IN (SELECT supplierID FROM supplies WHERE warehouseID = (?) )"
    const WID = [req.body.WID]

    db.query(q, [WID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/warehouse_products", (req, res) => {
    const q = "SELECT stores1.*, product.* FROM stores1 JOIN product ON stores1.prd_id = product.pid WHERE stores1.Wh_ID = (?) ; "
    const WID = [req.body.WID]

    db.query(q, [WID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/store_products", (req, res) => {
    const q = "SELECT stores2.*, product.* FROM stores2 JOIN product ON stores2.Prd_ID = product.pid WHERE stores2.Store_ID = (?) ; "
    const WID = [req.body.WID]

    db.query(q, [WID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app2.post("/store_add_products", (req, res) => {
    const q1 = "SELECT * FROM stores1 WHERE Prd_ID = ? AND Stock >= ?";
    const v1 = [req.body.PID];
    const v2 = [req.body.Stock];

    db.query(q1, [v1, v2], (err, data) => {
        if (err) return res.json(err);

        const q2 = "SELECT * FROM delivers_to ORDER BY D_ID DESC LIMIT 1;";
        db.query(q2, (err, result) => {
            if (err) return res.json(err);

            const dId = result.length > 0 ? result[0].D_ID + 1 : 1;
            const storeId = req.body.storeID;
            const wareId = data[0].Wh_ID;
            const prodId = req.body.PID;
            const quantity = req.body.Stock;
            const status = 'pending';

            const q3 = "INSERT INTO delivers_to (D_ID, Quantity, Delivery_status, StoreID, WareID, ProdID) VALUES (?, ?, ?, ?, ?, ?)";
            const values = [dId, quantity, status, storeId, wareId, prodId];

            const q4 = "UPDATE stores1 SET Stock = Stock - ? WHERE Prd_Id = ? AND Wh_ID = ?;"
            db.query(q4,[quantity,prodId,wareId],(err,red_res)=> {
                if (err) return res.json(err);

            } );

            db.query(q3, values, (err, final_result) => {
                if (err) return res.json(err);
                return res.json(final_result);
            });
        });
    });
});
app2.post("/warehouse_add_products", (req, res) => {
    const q = "insert into stores1 values (?) ; "
    const values = [req.body.Stock, req.body.PID, req.body.WID]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app2.post("/warehouse_update_products", (req, res) => {
    const q = "update stores1 set stock=? where prd_id=? and wh_id=?;"
    const v1 = req.body.Stock;
    const v2 = req.body.prd_id;
    const v3 = req.body.wh_id;
    db.query(q, [v1, v2, v3], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app2.post("/product", (req, res) => {
    const q = "INSERT INTO `buttermeup`.`product` (`PID`,`Pname`,`Price`,`categoryID`) VALUES (?);"
    const values = [req.body.PID, req.body.Pname, req.body.Price, req.body.categoryID];
    console.log(req.body.PID, req.body.Pname, req.body.Price, req.body.categoryID)
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Values inserted\n")
    })
})

app2.listen(8800, () => {
    console.log("connected to backend!")
})



