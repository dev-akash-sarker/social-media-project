export default function DateOfBirth({
  // eslint-disable-next-line react/prop-types
  formik,
  // eslint-disable-next-line react/prop-types
  years,
  // eslint-disable-next-line react/prop-types
  months,
  // eslint-disable-next-line react/prop-types
  getDates,
  // eslint-disable-next-line react/prop-types
  ageError,
}) {
  return (
    <>
      <div>
        <div className="flex gap-x-1 lg:gap-x-7 mb-4 font-GilroyNormal">
          <select
            // eslint-disable-next-line react/prop-types
            onChange={formik.handleChange}
            autoComplete="off"
            // eslint-disable-next-line react/prop-types
            onBlur={formik.handleBlur}
            // eslint-disable-next-line react/prop-types
            value={formik.values.bYear}
            name="bYear"
            className="border border-line_color w-[33%] p-2"
          >
            {
              // eslint-disable-next-line react/prop-types
              years.map((year, index) => (
                <option key={index}>{year}</option>
              ))
            }
          </select>
          <select
            // eslint-disable-next-line react/prop-types
            onChange={formik.handleChange}
            autoComplete="off"
            // eslint-disable-next-line react/prop-types
            onBlur={formik.handleBlur}
            // eslint-disable-next-line react/prop-types
            value={formik.values.bMonth}
            name="bMonth"
            className="border border-line_color w-[33%] p-2"
          >
            {
              // eslint-disable-next-line react/prop-types
              months.map((month, index) => (
                <option key={index}>{month}</option>
              ))
            }
          </select>

          <select
            // eslint-disable-next-line react/prop-types
            onChange={formik.handleChange}
            autoComplete="off"
            // eslint-disable-next-line react/prop-types
            onBlur={formik.handleBlur}
            // eslint-disable-next-line react/prop-types
            value={formik.values.bDate}
            name="bDate"
            className="border border-line_color w-[33%] p-2"
          >
            {
              // eslint-disable-next-line react/prop-types
              getDates.map((day, index) => (
                <option key={index}>{day}</option>
              ))
            }
          </select>
        </div>
      </div>
      {ageError && (
        <p className=" font-GilroyNormal text-red text-sm my-2">{ageError}</p>
      )}
    </>
  );
}
