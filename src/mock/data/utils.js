export function okJsonify(data = {}) {
  return {
    ok: true,
    data,
  };
}

export function failJsonify(reason, data = {}) {
  return {
    ok: false,
    data,
    reason,
  };
}
