import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Data2.css";

function Data1() {
  const API = "https://task-1-1eh0.onrender.com";

  const [form, setForm] = useState({
    title: "",
    description: "",
    duedate: "",
    priority: "medium",
    status: "To Do",
  });

  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const token = localStorage.getItem("token");

  const fetchData = useCallback(async () => {
    if (!token) return;

    try {
      const res = await axios.get(`${API}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handle = async (e) => {
    e.preventDefault();

    try {
      if (edit) {
        await axios.put(`${API}/${edit}`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEdit(null);
      } else {
        await axios.post(`${API}/`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setForm({
        title: "",
        description: "",
        duedate: "",
        priority: "medium",
        status: "To Do",
      });

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const clear1 = async (id) => {
    try {
      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const update = (item) => {
    setForm({
      title: item.title,
      description: item.description,
      duedate: item.duedate,
      priority: item.priority,
      status: item.status,
    });

    setEdit(item._id);
  };

  return (
    <div className="page">
      <div className="form-section">
        <form onSubmit={handle}>
          <label htmlFor="k1">Title:</label>
          <input
            type="text"
            id="k1"
            placeholder="Enter title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <br />

          <label htmlFor="k2">Description:</label>
          <input
            type="text"
            id="k2"
            placeholder="Enter description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <br />

          <label htmlFor="k3">Due Date:</label>
          <input
            type="date"
            id="k3"
            value={form.duedate}
            onChange={(e) =>
              setForm({
                ...form,
                duedate: e.target.value,
              })
            }
          />

          <br />

          <label htmlFor="k4">Priority:</label>
          <select
            id="k4"
            value={form.priority}
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>

          <br />

          <label htmlFor="k5">Status:</label>
          <select
            id="k5"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
          </select>

          <br />

          <button type="submit">
            {edit ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>

      <div className="data-section">
        {data.map((item) => (
          <div
            key={item._id}
            data-priority={item.priority}
          >
            <h3>{item.title}</h3>

            <p>
              <strong>Description:</strong>{" "}
              {item.description}
            </p>

            <p>
              <strong>Due Date:</strong>{" "}
              {item.duedate}
            </p>

            <p>
              <strong>Priority:</strong>{" "}
              {item.priority}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {item.status}
            </p>

            <button
              onClick={() => clear1(item._id)}
            >
              Delete
            </button>

            <button
              onClick={() => update(item)}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data1;
