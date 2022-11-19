import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer",
      img: "https://plus.unsplash.com/premium_photo-1661438548370-816a2e22c591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Paid",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Plkm",
      img: "https://media.istockphoto.com/id/1386628239/photo/a-plate-of-grilled-lamb-with-i%C3%A7-pilav-small-plates-carrots-tand%C4%B1r-kebab%C4%B1.jpg?b=1&s=170667a&w=0&k=20&c=HPirWBqWucvrJLX86IZh5w-2F0w5T9HT8YJouB5jZyE=",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "paid",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redra1",
      img: "https://media.istockphoto.com/id/177043240/photo/indian-butter-chicken-curry.jpg?b=1&s=170667a&w=0&k=20&c=kJV8WfLsdY8sQ3p4qKdhgDwgZt9fg9pOoqbc09D2b3s=",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Raz",
      img: "https://media.istockphoto.com/id/1227594550/photo/chicken-curry-creamy-chicken-butter.jpg?b=1&s=170667a&w=0&k=20&c=nVxKfO2kQeSwvR1MYv8VsM8xjuTFKXyJ1MfbIrPBuME=",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "instock",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS",
      img: "https://media.istockphoto.com/id/1366228891/photo/many-colorful-organic-dried-vibrant-indian-food-spices-some-in-metal-measuring-dried-food.jpg?b=1&s=170667a&w=0&k=20&c=Y8KOO5fGOtNOopaudG5PbfC0p9V_rT_lL04OpBtO5KM=",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "instock",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
