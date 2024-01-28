/* eslint-disable @typescript-eslint/no-unused-vars */
import remoteConfig from '@react-native-firebase/remote-config';
export const ActivateConfig = (cb: any) => {
  remoteConfig()
    .setDefaults({
      config_app: 'default',
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        cb(false);
      } else {
        cb(false);
      }
    })
    .catch(() => {
      cb(true);
    });
};

export const GetAllConfig = (data: any, cb: any) => {
  const parameters = remoteConfig().getAll();
  Object.entries(parameters).forEach((configs: any) => {
    const [key, entry] = configs;
  });
  cb();
};

export const remoteConfigGetValue = (value: string) => {
  return remoteConfig().getValue(`${value}`);
};

export const refreshRemoteConfig = async () => {
  try {
    await remoteConfig().fetch(0);
    await remoteConfig().activate();
  } catch (err) {
    console.log('remoteConfig error ', err);
  }
};

export const getRemoteConfigValue = (key: string) => {
  const parameters = remoteConfig().getValue(key);
  return parameters;
};
