const getInteractions = (
  query,
  type,
  database,
  evidence,
  assembly_level,
  molecule,
  page
) => {
  let body = {};
  if (evidence) {
    Object.assign(body, { evidence: [`${evidence}`] });
  }
  if (molecule) {
    Object.assign(body, { molecule: [`${molecule}`] });
  }
  Object.assign(body, {
    query: query,
    db: type,
    genome_database: database,
    assembly_level: assembly_level,
    literature: false,
  });

  const data = fetch(
    `http://afproject.org:8001/api/interaction/?page=${page}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  return data;
};

const getHints = (query, type) => {
  const data = fetch("http://afproject.org:8001/api/hints/", {
    method: "POST",
    body: JSON.stringify({
      query: query,
      db: type,
    }),
  }).then((res) => res.json());
  return data;
};

const getDbDictonary = () => {
  const data = fetch("http://afproject.org:8001/api/values/", {
    method: "POST",
    body: JSON.stringify({
      assembly_level: true,
      genome_database: true,
      evidence: true,
      genome_type: true,
    }),
  }).then((res) => res.json());
  return data;
};
export { getInteractions, getHints, getDbDictonary };