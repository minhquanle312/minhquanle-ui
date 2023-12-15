export const formatAccountId = data => {
  const results = data?.map(item => item?.userId);
  return results;
};

export const formatParams = data => {
  const params = {
    title: '',
    ownerId: undefined,
    followers: [],
    referenceUrl: '',
    priority: '',
    feature: '',
    ticketType: '',
    category: '',
    message: '',
    attachments: [],
  };
  if (data?.ownerId) {
    params.ownerId = data?.ownerId;
  }
  if (data?.title) {
    params.title = data?.title;
  }
  if (data?.followers?.length) {
    params.followers = formatAccountId(data?.followers);
  }
  if (data?.referenceUrl) {
    params.referenceUrl = data?.referenceUrl;
  }
  if (data?.priority) {
    params.priority = data?.priority;
  }
  if (Object.keys(data?.feature).length) {
    params.feature = data?.feature?.value;
  }
  if (data?.ticketType) {
    params.ticketType = data?.ticketType;
  }
  if (Object.keys(data?.category).length) {
    params.category = data?.category?.value;
  }
  if (data?.message?.length) {
    params.message = data?.message;
  }
  if (data?.files?.length) {
    params.attachments = data?.files?.map(file => file?.token);
  }
  return params;
};

export const postCustomEvent = (type: any, data: any) => {
  if (!type) {
    return;
  }

  try {
    document.dispatchEvent(
      new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true,
        composed: false,
        data,
      } as CustomEventInit<any>),
    );
  } catch (error) {
    console.log('err :>', error);
  }
};
export const expendDefault = (data: any) => {
  const expend: string[] = [];
  data &&
    data.forEach(each => {
      if (each.children && each.children.length > 0) {
        expend.push(each.key);
        each.children.forEach(item => {
          if (item.children && item.children.length > 0) {
            expend.push(item.key);
          }
        });
      }
    });
  return expend;
};
