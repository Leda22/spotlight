import "./newStudent.css";

export default function NewStudent() {
  return (
    <div className="NewStudent">
      <h1 className="NewStudentTitle">Nouveau Etudiant</h1>
      <form className="NewStudentForm">
        <div className="NewStudentItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="NewStudentItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="NewStudentItem">
          <label>Phone</label>
          <input type="text" placeholder="0123456789" />
        </div>
        <div className="NewStudentItem">
          <label>Address</label>
          <input type="text" placeholder="Sidi Bel Abbes" />
        </div>
        <div className="NewStudentItem">
          <label>Groupes</label>
          <select className="NewStudentSelect" name="active" id="active">
            <option value="coran">coran</option>
            <option value="francais">francais</option>
          </select>
        </div>
        <div className="NewStudentItem">
          <label>Gender</label>
          <div className="NewStudentGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="NewStudentItem">
          <label>Active</label>
          <select className="NewStudentSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="NewStudentButton">Create</button>
      </form>
    </div>
  );
}
