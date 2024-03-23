duplicates(a, n);
{
  let duplicates = [];
  a.sort((a, b) => a - b);
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
      if (a[i] !== duplicates[duplicates.length - 1]) {
        duplicates.push(a[i]);
      }
    }
  }
  if (duplicates == null) {
    return -1;
  } else {
    return duplicates;
  }
}
