// exports.getFilterItems = async (req, res, next) => {
//   const output = {
//     status: 'fail',
//     message: '',
//     results: '',
//     data: [],
//   };

//   const findTags = () => {
//     if (req.body.tags.length) {
//       const tags = req.body.tags.map(v => "'" + v + "'").join(',');
//       return `JOIN (SELECT share_item_id,item_hash FROM share_hash WHERE item_hash IN (${tags}) GROUP BY share_item_id) f ON si.share_item_id=f.share_item_id`;
//     } else return '';
//   };

//   const getFilterItemsSql = `SELECT si.share_item_id,si.share_order_id,si.share_title,si.share_desc,fi.share_imgPath,sc.saves_count,mp.mem_photo_img_path,mp.mem_nickname FROM share_item si
//     ${findTags()}
//     JOIN ( SELECT share_img_id,share_imgPath from share_img img WHERE share_img_order = 1) fi
//     ON si.share_img_id = fi.share_img_id
//     JOIN (SELECT COUNT(share_item_id) saves_count , share_item_id FROM share_save GROUP BY share_item_id) sc
//     ON si.share_item_id = sc.share_item_id
//     JOIN ( SELECT co.mem_id ,co.orders_id, mem.mem_photo_img_path, mem.mem_nickname,co.orders_value,co.orders_print_time from cart_orders co JOIN mem ON mem.mem_id = co.mem_id) mp
//     ON mp.orders_id = si.share_order_id
//     WHERE ${req.body.minPrice ? `mp.orders_value > ${req.body.minPrice}` : `1`}
//     AND ${req.body.maxPrice ? `mp.orders_value > ${req.body.maxPrice}` : `1`}
//     AND mp.orders_print_time > 10
//     AND mp.orders_value < 50`;

//   const [rsTags] = await db.query(getFilterItemsSql);

//   output.status = 'success';
//   output.results = rsTags.length;
//   output.data = rsTags;
//   res.status(200).json(output);

//   console.log(rsTags);
// };
