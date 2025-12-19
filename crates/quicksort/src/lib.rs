pub fn quicksort<T: Ord + Clone>(arr: &mut [T]) {
    if arr.len() <= 1 {
        return;
    }
    quicksort_helper(arr, 0, arr.len() - 1);
}

fn quicksort_helper<T: Ord + Clone>(arr: &mut [T], low: usize, high: usize) {
    if low < high {
        let pivot_idx = partition(arr, low, high);
        if pivot_idx > 0 {
            quicksort_helper(arr, low, pivot_idx - 1);
        }
        quicksort_helper(arr, pivot_idx + 1, high);
    }
}

fn partition<T: Ord + Clone>(arr: &mut [T], low: usize, high: usize) -> usize {
    let pivot = arr[high].clone();
    let mut i = low;

    for j in low..high {
        if arr[j] <= pivot {
            arr.swap(i, j);
            i += 1;
        }
    }
    arr.swap(i, high);
    i
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_empty_array() {
        let mut arr: Vec<i32> = vec![];
        quicksort(&mut arr);
        assert_eq!(arr, vec![]);
    }

    #[test]
    fn test_single_element() {
        let mut arr = vec![1];
        quicksort(&mut arr);
        assert_eq!(arr, vec![1]);
    }

    #[test]
    fn test_sorted_array() {
        let mut arr = vec![1, 2, 3, 4, 5];
        quicksort(&mut arr);
        assert_eq!(arr, vec![1, 2, 3, 4, 5]);
    }

    #[test]
    fn test_reverse_sorted_array() {
        let mut arr = vec![5, 4, 3, 2, 1];
        quicksort(&mut arr);
        assert_eq!(arr, vec![1, 2, 3, 4, 5]);
    }

    #[test]
    fn test_unsorted_array() {
        let mut arr = vec![3, 7, 8, 5, 2, 1, 9, 5, 4];
        quicksort(&mut arr);
        assert_eq!(arr, vec![1, 2, 3, 4, 5, 5, 7, 8, 9]);
    }

    #[test]
    fn test_duplicates() {
        let mut arr = vec![3, 3, 3, 1, 2, 1];
        quicksort(&mut arr);
        assert_eq!(arr, vec![1, 1, 2, 3, 3, 3]);
    }

    #[test]
    fn test_negative_numbers() {
        let mut arr = vec![-5, 3, -1, 0, 8, -3];
        quicksort(&mut arr);
        assert_eq!(arr, vec![-5, -3, -1, 0, 3, 8]);
    }

    #[test]
    fn test_strings() {
        let mut arr = vec!["banana", "apple", "cherry", "date"];
        quicksort(&mut arr);
        assert_eq!(arr, vec!["apple", "banana", "cherry", "date"]);
    }

    #[test]
    fn test_large_array() {
        let mut arr: Vec<i32> = (0..1000).rev().collect();
        quicksort(&mut arr);
        let expected: Vec<i32> = (0..1000).collect();
        assert_eq!(arr, expected);
    }
}
