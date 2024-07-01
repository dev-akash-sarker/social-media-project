export default function Gender({ formik, errors, touched }) {
  return (
    <>
      <div className=" font-GilroyNormal mb-4">
        <input
          id="male"
          type="radio"
          value="male"
          onChange={formik.handleChange}
          autoComplete="off"
          onBlur={formik.handleBlur}
          name="gender"
          className="mx-2 ml-0"
        />
        <label htmlFor="male">Male</label>
        <input
          id="female"
          type="radio"
          value="female"
          onChange={formik.handleChange}
          autoComplete="off"
          onBlur={formik.handleBlur}
          name="gender"
          className="mx-2"
        />
        <label htmlFor="female">Female</label>
        {errors.gender && touched.gender && (
          <p className=" font-GilroyMedium text-red">{formik.errors.gender}</p>
        )}
      </div>
    </>
  );
}
