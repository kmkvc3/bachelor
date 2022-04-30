const BASE_URL = "http://afproject.org:8002";

const getInteractions = (
  taxon_id,
  evidence,
  assembly_level,
  molecule,
  sort,
  page,
  offset
) => {
  let body = {};
  if (evidence) {
    if (evidence.length) {
      Object.assign(body, { evidence: evidence });
    }
  }
  if (molecule) {
    if (molecule.length) {
      Object.assign(body, { genome_type: molecule });
    }
  }
  if (assembly_level) {
    if (assembly_level.length) {
      Object.assign(body, { assembly_level: assembly_level });
    }
  }
  if (sort) {
    Object.assign(body, { sort: sort });
  }
  Object.assign(body, {
    taxon_id: taxon_id,
  });

  const data = new Promise((resolve, reject) => {
    fetch(
      `${BASE_URL}/api/search/interactions/?page=${page}&page_size=${offset}`,
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    ).then((res) => {
      setTimeout(() => {
        resolve(res.json());
      }, 0);
    });
  });
  return data;
};

const getHints = (query, type) => {
  const data = fetch(`${BASE_URL}/api/search/hints/${type}?query=${query}`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

const getDbDictonary = () => {
  const data = fetch(`${BASE_URL}/api/search/filters/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

const getUpdateStats = () => {
  const data = fetch(`${BASE_URL}/api/db/info/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

const getVirusRecord = (virus_id: string) => {
  const data = fetch(`${BASE_URL}/api/record/virus/?virus_id=${virus_id}`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

const getHostRecord = (host_id: string) => {
  const data = new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/api/taxonomy/host/?host_id=${host_id}`, {
      method: "GET",
    }).then((res) => {
      setTimeout(() => {
        resolve(res.json());
      }, 180);
    });
  });
  return data;
};

const getBrowseData = (
  taxon_id: string,
  db: "virus" | "host",
  tax: "alt" | "ncbi"
) => {
  const data = fetch(
    `${BASE_URL}/api/browse/${db}/${tax}?taxon_id=${taxon_id}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return data;
};

const getBasicStats = () => {
  const data = fetch(`${BASE_URL}/api/stats/basic/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusStatsNCBI = () => {
  const data = fetch(`${BASE_URL}/api/stats/taxonomy/virus/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusStatsICTV = () => {
  const data = fetch(`${BASE_URL}/api/stats/taxonomy/virus/ictv`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getTopVirusStats = (rank) => {
  const data = fetch(`${BASE_URL}/api/stats/taxonomy/top/virus/?rank=${rank}`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusGenomeStats = () => {
  const data = fetch(`${BASE_URL}/api/stats/virus/genome/type/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getAssemblyLevel = () => {
  const data = fetch(`${BASE_URL}/api/stats/virus/genome/assembly_level/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusGenomeDistro = (database) => {
  const data = fetch(`${BASE_URL}/api/stats/virus/genome/size/histogram/?database=${database}`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusGenomeSource = () => {
  const data = fetch(`${BASE_URL}/api/stats/virus/genome/source/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getVirusGenomeSummary = () => {
  const data = fetch(`${BASE_URL}/api/stats/virus/genome/size/summary/`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};

export const getTopHostStats = (rank) => {
  const data = fetch(`${BASE_URL}/api/stats/taxonomy/top/interactions/?rank=${rank}`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
};
export {
  getInteractions,
  getHints,
  getDbDictonary,
  getBrowseData,
  getUpdateStats,
  getVirusRecord,
  getHostRecord,
  getBasicStats
};
