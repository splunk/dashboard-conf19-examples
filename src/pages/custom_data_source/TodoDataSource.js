import DataSource from '@splunk/datasources/DataSource';
import DataSet from '@splunk/datasource-utils/DataSet';
import { url } from './utils';

class TodoDataSource extends DataSource {
    request() {
        return subscriber => {
            (async () => {
                try {
                    const response = await fetch(url);

                    if (!response.ok) {
                        subscriber.error({
                            level: 'error',
                            message: `${response.status} - ${response.statusText}`,
                        });
                    }

                    const todos = await response.json();

                    const fields = Object.keys(todos[0]).map(name => ({ name }));

                    const data = DataSet.fromJSONArray(fields, todos);

                    subscriber.next({ data });
                    subscriber.complete();
                } catch (e) {
                    subscriber.error({
                        level: 'error',
                        message: e.message,
                    });
                }
            })();
        };
    }
}

export default TodoDataSource;
