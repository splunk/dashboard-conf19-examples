import DataSource from '@splunk/datasources/DataSource';
import DataSet from '@splunk/datasource-utils/DataSet';
import { url } from './utils';

class PostDataSource extends DataSource {
    request() {
        return async subscriber => {
            const response = await fetch(url);

            if (!response.ok) {
                subscriber.error({
                    level: 'error',
                    message: `${response.status}: ${response.statusText}`,
                });
            }

            const posts = await response.json();

            const data = DataSet.fromJSONArray(null, posts);

            subscriber.next({
                data,
            });

            subscriber.complete();
        };
    }
}

export default PostDataSource;
