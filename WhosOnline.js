let friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }];

const whosOnline = (friends) => {
  const online = [];
  const offline = [];
  const away = [];
  
  friends.map(friend => {
    friend.status === 'online' && friend.lastActivity < 11 ? online.push(friend.username) :  
    friend.status === 'offline' ?  offline.push(friend.username) :
    away.push(friend.username);
  });
  
  if (online.length > 0 && offline.length > 0 && away.length > 0) return { online, offline, away }
  if (offline.length > 0 && away.length > 0) return { offline, away }
  if (online.length > 0 && away.length > 0) return { online, away }
  if (online.length > 0 && offline.length > 0) return { online, offline }
  
  return {}
}

whosOnline(friends);