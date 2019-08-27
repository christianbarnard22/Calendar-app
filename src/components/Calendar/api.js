import { format } from "date-fns";

export async function eventsRequest(start, finish) {
  // I decided to scope the data that is return to the current month
  // that is being returned.
  let url = `/api/getList?start=${start}&finish=${finish}`;

  try {
    let res = await fetch(url);
    let releaseList = await res.json();

    // restructuring the data to an object with the launch date as the key,
    // this will make determining days with releases more efficient in the day component
    return releaseList.reduce(function(releases, item) {
      let dateKey = format(new Date(item.launch_date), "P");
      if (dateKey in releases) {
        releases[dateKey].push(item.title);
      } else {
        releases[dateKey] = [];
        releases[dateKey].push(item.title);
      }
      return releases;
    }, {});
  } catch (error) {
    // Normally I wouldn't log exceptions to the console. I probably log them to Elasticsearch
    // or bugsnag
    console.log("Oops: ", error);
  }
}
